// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for getting favicon on Chrome extension.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.favicon.chrome.ex.FaviconGetter');

goog.require('goog.asserts');
goog.require('orga.favicon.chrome.ex');
goog.require('orga.favicon.FaviconGetter');


/**
 * @constructor
 * @extends {orga.favicon.FaviconGetter}
 */
orga.favicon.chrome.ex.FaviconGetter = function() {
  goog.base(this);
};
goog.inherits(orga.favicon.chrome.ex.FaviconGetter, orga.favicon.FaviconGetter);


/** @override */
orga.favicon.chrome.ex.FaviconGetter.prototype.getUri = function(uri, callback) {
  goog.asserts.assertFunction(callback);
  var fav = orga.favicon.chrome.ex.getUri(uri);
  callback(fav);
};
