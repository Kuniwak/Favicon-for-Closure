// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for getting favicon.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.favicon.FaviconGetter');

goog.require('goog.Disposable');
goog.require('goog.asserts');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventType');
goog.require('orga.favicon');
goog.require('orga.uri');



/**
 * Class for helper makes easy a favicon image element creation.
 * @constructor
 * @extends {goog.Disposable}
 */
orga.favicon.FaviconGetter = function() {
  goog.base(this);
};
goog.inherits(orga.favicon.FaviconGetter, goog.Disposable);


/** @const */
orga.favicon.FaviconGetter.prototype.DEFAULT_SRC = orga.favicon.DEFAULT_SRC;


/** @override */
orga.favicon.FaviconGetter.prototype.disposeInternal = function() {
  goog.base(this, 'disposeInternal');
  delete this.DEFAULT_SRC;
};


/**
 * @param {goog.Uri|string} uri A target URI.
 * @param {Function(string)} callback A callback function.
 *    It will be gave data link.
 */
orga.favicon.FaviconGetter.prototype.getImageSrc = goog.abstractMethod;


/**
 * @param {goog.Uri|string} uri A target URI.
 * @return {HTMLImageElement} Favicon image element.
 */
orga.favicon.FaviconGetter.prototype.getImageElement = function(uri) {
  var elem = goog.dom.createDom('img', 'orga-favicon');
  goog.events.listenOnce(
      /* src         */ elem,
      /* type        */ goog.events.EventType.ERROR,
      /* listener    */ this.handleError,
      /* opt_capture */ false,
      /* opt_scope   */ this);
  elem.src = this.getImageSrc(uri);
  return elem;
};


/**
 * @param {goog.events.Event} e An error event fired from HTMLImageElement.
 */
orga.favicon.FaviconGetter.prototype.handleError = function(e) {
  e.target.src = this.DEFAULT_SRC;
  e.preventDefault();
};
