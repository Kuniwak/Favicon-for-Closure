// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for getting favicon.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.favicon.chrome.ex');

goog.require('orga.favicon');


/** @const */
orga.favicon.chrome.ex.PREFIX_URI = 'chrome://favicon/';


/**
 * @param {string|goog.Uri} arg_uri A target URI.
 * @param {Function(string)} callback A callback function.
 *    It will be gave data link.
 * @override
 */
orga.favicon.chrome.ex.getUri = function(uri) {
  return orga.favicon.chrome.ex.PREFIX_URI + uri;
};
