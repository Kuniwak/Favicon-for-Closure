// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for getting favicon using google API.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.favicon.GoogleFaviconGetter');

goog.require('goog.Uri');
goog.require('goog.Uri.QueryData');
goog.require('orga.favicon.FaviconGetter');
goog.require('orga.uri');



/**
 * @constructor
 * @extends {orga.favicon.FaviconGetter}
 */
orga.favicon.GoogleFaviconGetter = function() {
  goog.base(this);
};
goog.inherits(orga.favicon.GoogleFaviconGetter,
    orga.favicon.FaviconGetter);


/**
 * A base URI of favicon API provided by Google.
 * @const
 */
orga.favicon.GoogleFaviconGetter.CGI_URI =
    'http://www.google.com/s2/u/0/favicons';


/** @const */
orga.favicon.GoogleFaviconGetter.prototype.CGI_URI =
    orga.favicon.GoogleFaviconGetter.CGI_URI;


/** @override */
orga.favicon.GoogleFaviconGetter.prototype.disposeInternal = function() {
  goog.base(this, 'disposeInternal');
  delete this.CGI_URI;
};


/** @override */
orga.favicon.GoogleFaviconGetter.prototype.getImageSrc =
    function(uri) {
  var google = new goog.Uri(this.CGI_URI);
  var query = new goog.Uri.QueryData();
  var newUri = orga.uri.unescapeIfNecessary(uri);
  query.add('domain', newUri.getDomain());
  google.setQueryData(query);
  return google.toString();
};
