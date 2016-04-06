'use strict';

function fixme(val) {

  if (typeof val !== 'number') {
    val = parseInt(val, 10);
  }

  return isNaN(val) || !isFinite(val) ? 0 : val;
}

module.exports = function (min, max, precision) {

  var length = arguments.length;

  if (length === 0) {
    min = 0;
    max = 1;
  } else if (length === 1) {
    max = fixme(min);
    min = 0;
  } else {
    min = fixme(min);
    max = fixme(max);
  }

  if (min < 0) {
    min = 0;
  }

  if (max < 0) {
    max = 0;
  }

  // swap to variables
  // ref: http://stackoverflow.com/a/16201688
  if (min > max) {
    min = min ^ max;
    max = min ^ max;
    min = min ^ max;
  }


  var decimal = Math.random() * (max - min) + min;

  var type = typeof precision;
  if (type !== 'undefined') {
    if (type !== 'number') {
      precision = parseInt(precision, 10);
    }

    if (isNaN(precision) || !isFinite(precision)) {
      return decimal;
    }

    if (precision < 0) {
      precision = 0;
    } else if (precision > 20) {
      precision = 20;
    }

    return precision
      ? parseFloat(decimal.toFixed(precision))
      : Math.round(decimal);
  }

  return decimal;
};
