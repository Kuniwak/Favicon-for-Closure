// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for getting favicon on Chrome extension.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.favicon.ex.chrome.FaviconGetter');

goog.require('goog.asserts');
goog.require('orga.favicon.FaviconGetter');



/**
 * @constructor
 * @extends {orga.favicon.FaviconGetter}
 */
orga.favicon.ex.chrome.FaviconGetter = function() {
  goog.base(this);
};
goog.inherits(orga.favicon.ex.chrome.FaviconGetter, orga.favicon.FaviconGetter);


/** @const */
orga.favicon.ex.chrome.FaviconGetter.PREFIX_URI = 'chrome://favicon/';


/** @const */
orga.favicon.ex.chrome.FaviconGetter.prototype.PREFIX_URI =
    orga.favicon.ex.chrome.FaviconGetter.PREFIX_URI;


/** @override */
orga.favicon.ex.chrome.FaviconGetter.prototype.disposeInternal = function() {
  goog.base(this, 'disposeInternal');
  delete this.PREFIX_URI;
};


/** @override */
orga.favicon.ex.chrome.FaviconGetter.prototype.getUri =
    function(uri, callback) {
  goog.asserts.assertFunction(callback);
  var fav = this.PREFIX_URI + uri;
  callback(fav);
};
