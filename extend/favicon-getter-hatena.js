// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for getting favicon using hatena API.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.favicon.HatenaFaviconGetter');

goog.require('goog.Uri');
goog.require('goog.Uri.QueryData');
goog.require('orga.favicon.FaviconGetter');



/**
 * @constructor
 * @extends {orga.favicon.FaviconGetter}
 */
orga.favicon.HatenaFaviconGetter = function() {
  goog.base(this);
};
goog.inherits(orga.favicon.HatenaFaviconGetter,
    orga.favicon.FaviconGetter);


/**
 * A base URI of favicon API provided by Hatena.
 * @const
 */
orga.favicon.HatenaFaviconGetter.CGI_URI = 'http://favicon.hatena.ne.jp/';


/** @const */
orga.favicon.HatenaFaviconGetter.prototype.CGI_URI =
    orga.favicon.HatenaFaviconGetter.CGI_URI;


/** @override */
orga.favicon.HatenaFaviconGetter.prototype.disposeInternal = function() {
  goog.base(this, 'disposeInternal');
  delete this.CGI_URI;
};


/** @override */
orga.favicon.HatenaFaviconGetter.prototype.getImageSrc =
    function(uri) {
  var hatena = new goog.Uri(this.CGI_URI);
  var query = new goog.Uri.QueryData();
  query.add('url', uri.toString());
  hatena.setQueryData(query);
  return hatena.toString();
};
