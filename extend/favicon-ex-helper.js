// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for getting favicon.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.favicon.ex.AdaptiveFaviconHelper');

goog.require('orga.favicon');
goog.require('orga.ex.adapt.favicon');



/**
 * Class for helper makes easy a favicon image element creation.
 * @constructor
 * @extends {orga.favicon.FaviconHelper}
 */
orga.favicon.ex.AdaptiveFaviconHelper = function() {
  goog.base(this, orga.ex.adapt.getAdaptedFaviconGetter());
};
