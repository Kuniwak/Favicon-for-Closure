// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for getting favicon.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.favicon.FaviconGetter');

goog.require('goog.Disposable');
goog.require('goog.asserts');
goog.require('orga.favicon');



/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
orga.favicon.FaviconGetter = function() {
  goog.base(this);
};
goog.inherits(orga.favicon.FaviconGetter, goog.Disposable);


/**
 * @param {goog.Uri|string} uri A target URI.
 * @param {Function(string)} callback A callback function.
 *    It will be gave data link.
 */
orga.favicon.FaviconGetter.prototype.getUri = function(uri, callback) {
  goog.asserts.assertFunction(callback);
  var fav = orga.favicon.getUri(uri);
  callback(fav);
};
