// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for getting favicon using hatena API.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.favicon.hatena.HatenaFaviconGetter');

goog.require('goog.Uri');
goog.require('goog.Uri.QueryData');
goog.require('orga.favicon.FaviconGetter');


/**
 * A base URI of favicon API provided by hatena.
 * @const
 */
orga.favicon.hatena.CGI_URI = 'http://favicon.hatena.ne.jp/';


/**
 * @constructor
 * @extends {orga.favicon.FaviconGetter}
 */
orga.favicon.hatena.HatenaFaviconGetter = function() {
  goog.base(this);
};
goog.inherits(orga.favicon.hatena.HatenaFaviconGetter,
    orga.favicon.FaviconGetter);


/** @const */
orga.favicon.hatena.HatenaFaviconGetter.prototype.CGI_URI =
    orga.favicon.hatena.CGI_URI;


/** @overide */
orga.favicon.hatena.HatenaFaviconGetter.prototype.disposeInternal = function() {
  goog.base(this, 'disposeInternal');
  delete this.CGI_URI;
};


/**
 * @param {goog.Uri|string} uri A target URI.
 * @param {Function(string)} callback A callback function.
 *    It will be gave data link.
 */
orga.favicon.hatena.HatenaFaviconGetter.prototype.getUri =
    function(uri, callback) {
  var hatena = new goog.Uri(this.CGI_URI);
  var query = new goog.Uri.QueryData();
  query.add('url', uri.toString());
  hatena.setQueryData(query);
  var fav = hatena.toString();
  goog.asserts.assertFunction(callback);
  callback(fav);
};
