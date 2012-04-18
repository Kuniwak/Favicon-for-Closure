// This script licensed under the MIT.
// http://orgachem.mit-license.org

/**
 * @fileoverview Script for getting favicon.
 * @author orga.chem.job@gmail.com (Orga Chem)
 */

goog.provide('orga.favicon.FaviconHelper');

goog.require('goog.asserts');
goog.require('goog.dom');
goog.require('goog.events');
goog.require('goog.events.EventTarget');
goog.require('goog.events.EventType');
goog.require('orga.favicon');
goog.require('orga.uri');



/**
 * @constructor
 * @extends {goog.events.EventTarget}
 */
orga.favicon.FaviconHelper = function() {
  goog.base(this);
  var F = orga.ex.adapt.getAdaptedFaviconGetter();

  /** @private */
  this.favGetter_ = new F();
};
goog.inherits(orga.favicon.FaviconHelper, goog.events.EventTarget);


/** @override */
orga.favicon.FaviconHelper.prototype.disposeInternal = function() {
  goog.base(this, 'disposeInternal');
  this.favGetter_.dispose();
  delete this.favGetter_;
};


/**
 * @param {goog.Uri|string} uri A target URI.
 * @param {Function(string)} callback A callback function.
 *    It will be gave data link.
 */
orga.favicon.FaviconHelper.prototype.getUri = function(uri, callback) {
  this.favGetter_.getUri.apply(this, arguments);
};


/**
 * @param {goog.Uri|string} uri A target URI.
 * @return {HTMLImageElement} Favicon image element.
 */
orga.favicon.FaviconHelper.prototype.getImageElement = function(uri) {
  var elem = goog.dom.createElement('img');
  this.setFaviconUri(uri, elem);
  goog.events.listenOnce(
      /* src         */ elem,
      /* type        */ goog.events.EventType.ERROR,
      /* listener    */ this.handleError);
  return elem;
};


/**
 * @protected
 * @param {goog.Uri|string} uri A target URI.
 * @param {HTMLImageElement} elem An image element.
 */
orga.favicon.FaviconHelper.prototype.setFaviconUri = function(uri, elem) {
  this.getUri(uri, function(src) {
    elem.src = src;
    // avoid memory leak.
    elem = null;
  });
};


/**
 * @param {goog.events.Event} e An error event fired from HTMLImageElement.
 */
orga.favicon.FaviconHelper.prototype.handleError = function(e) {
  e.target.src = orga.favicon.DEFAULT_SRC;
  e.preventDefault();
};
