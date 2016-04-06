# random-decimal

> Generate a random decimal.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/bubkoo/random-decimal/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/bubkoo/random-decimal/master.svg?style=flat-square)](https://travis-ci.org/bubkoo/random-decimal)
[![coverage:?](https://img.shields.io/coveralls/bubkoo/random-decimal/master.svg?style=flat-square)](https://coveralls.io/github/bubkoo/random-decimal)


## Install

```
$ npm install --save random-decimal
```

## Usage

```js
var randomDecimal = require('random-decimal');

randomDecimal();
// => 0.6718621402978897

randomDecimal(5);
// => 2.378583872690797

randomDecimal(10, 100);
// => 66.726907973785838

randomDecimal(10, 100, 2);
// => 32.68

```

## API

### randomDecimal()

Returns a float from `0` to `1`.

### randomDecimal(max)

Returns a float from `0` to `max`.

### randomDecimal(min, max)

Returns a float from `min` to `max`.

### randomDecimal(min, max, precision)

Returns a float from `min` to `max` which precision is `precision`.

#### min

Type: `Int`  
Default: `0`

Minimum float to return.

#### max

Type: `Int`  
Default: `1`

Maximum float to return.

**Note:** 

- Negative `min` and `max` will be treat as `0`.
- Non-numeric `min` or `max` will be treat as `0`.
- If `min` is greater than `max`, they will be swapped with each other.


#### precision

Type: `Int`  
Default: `undefined`

The precision of the returned float.

**Note:** 

- Non-numeric `precision` will be ignored.
- If `precision` is greater than `20`, then it will be treat as `20`.
- If `precision` is less than `0`, then it will be treat as `0`.


## Related

