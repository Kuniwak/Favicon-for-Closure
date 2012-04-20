// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for getting favicon using google API.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.favicon.google.GoogleFaviconGetter');

goog.require('goog.Uri');
goog.require('goog.Uri.QueryData');
goog.require('orga.favicon.FaviconGetter');
goog.require('orga.uri');


/**
 * A base URI of favicon API provided by google.
 * @const
 */
orga.favicon.google.CGI_URI = 'http://www.google.com/s2/u/0/favicons';


/**
 * @constructor
 * @extends {orga.favicon.FaviconGetter}
 */
orga.favicon.google.GoogleFaviconGetter = function() {
  goog.base(this);
};
goog.inherits(orga.favicon.google.GoogleFaviconGetter,
    orga.favicon.FaviconGetter);


/** @const */
orga.favicon.google.GoogleFaviconGetter.prototype.CGI_URI =
    orga.favicon.google.CGI_URI;

    
/** @override */
orga.favicon.google.GoogleFaviconGetter.prototype.disposeInternal = function() {
  goog.base(this, 'disposeInternal');
  delete this.CGI_URI;
};


/**
 * @param {goog.Uri|string} uri A target URI.
 * @param {Function(string)} callback A callback function.
 *    It will be gave data link.
 */
orga.favicon.google.GoogleFaviconGetter.prototype.getUri =
    function(uri, callback) {
  var google = new goog.Uri(this.CGI_URI);
  var query = new goog.Uri.QueryData();
  var newUri = orga.uri.unescapeIfNecessary(uri);
  query.add('domain', newUri.getDomain());
  google.setQueryData(query);
  var fav = google.toString();

  goog.asserts.assertFunction(callback);
  callback(fav);
};
