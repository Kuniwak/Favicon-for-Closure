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
 * Class for helper makes easy a favicon image element creation.
 * @constructor
 * @extends {goog.events.EventTarget}
 * @param {?orga.favicon.FaviconGetter=} opt_getter Optional favicon getter.
 */
orga.favicon.FaviconHelper = function(opt_getter) {
  goog.base(this);

  /** @private */
  this.favGetter_ = opt_getter || new orga.favicon.FaviconGetter();
};
goog.inherits(orga.favicon.FaviconHelper, goog.events.EventTarget);


/** @const */
orga.favicon.FaviconHelper.prototype.DEFAULT_SRC = orga.favicon.DEFAULT_SRC;


/** @override */
orga.favicon.FaviconHelper.prototype.disposeInternal = function() {
  goog.base(this, 'disposeInternal');
  this.favGetter_.dispose();
  delete this.favGetter_;
  delete this.DEFAULT_SRC;
};


/**
 * @param {goog.Uri|string} uri A target URI.
 * @param {Function(string)} callback A callback function.
 *    It will be gave data link.
 */
orga.favicon.FaviconHelper.prototype.getUri = function(uri, callback) {
  this.favGetter_.getUri(uri, callback);
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
      /* listener    */ this.handleError,
      /* opt_capture */ false,
      /* opt_scope   */ this);
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
  e.target.src = this.DEFAULT_SRC;
  e.preventDefault();
};
