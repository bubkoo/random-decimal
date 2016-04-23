'use strict';

var clamp         = require('clamp');
var assign        = require('object-assign');
var toFixed       = require('tofixed');
var toInteger     = require('to-integer');

var MAX_SAFE_INT = require('max-safe-int');

function fixme(val, min) {

  if (typeof val !== 'number') {
    val = toInteger(val);
  }

  if (isNaN(val) || !isFinite(val)) {
    val = min ? 0 : MAX_SAFE_INT;
  }

  return clamp(val, 0, MAX_SAFE_INT);
}

module.exports = function (options) {

  options = assign({
    min: 0,
    max: MAX_SAFE_INT,
    fixed: 4
  }, options);

  var min = fixme(options.min, true);
  var max = fixme(options.max, false);

  // swap to variables
  // ref: http://stackoverflow.com/a/16201688
  if (min > max) {
    min = min ^ max;
    max = min ^ max;
    min = min ^ max;
  }

  var decimal = Math.random() * (max - min) + min;
  var fixed   = clamp(toInteger(options.fixed), 0, 17);

  return fixed
    ? parseFloat(toFixed(decimal, fixed))
    : Math.round(decimal);

};
