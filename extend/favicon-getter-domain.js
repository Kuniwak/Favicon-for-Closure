// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for getting favicon from DOMAIN/favicon.ico.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.favicon.DomainFaviconGetter');

goog.require('orga.favicon.FaviconGetter');
goog.require('orga.uri');



/**
 * @constructor
 * @extends {orga.favicon.FaviconGetter}
 */
orga.favicon.DomainFaviconGetter = function() {
  goog.base(this);
};
goog.inherits(orga.favicon.DomainFaviconGetter, orga.favicon.FaviconGetter);


/**
 * @param {goog.Uri|string} uri A target URI.
 * @return {string} Favicon uri.
 */
orga.favicon.DomainFaviconGetter.prototype.getImageSrc =
    function(uri) {
  return orga.uri.unescapeIfNecessary(uri).setPath('favicon.ico');
};
