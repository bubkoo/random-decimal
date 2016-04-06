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

Returns an float from `0` to `1`.

### randomDecimal(max)

Returns an float from `0` to `max`.

### randomDecimal(min, max)

Returns an float from `min` to `max`.

### randomDecimal(min, max, precision)

Returns an float from `min` to `max` which precision is `precision`.

#### min

Type: `Int`  
Default: `0`

Minimum float to return.

#### max

Type: `Int`  
Default: `1`

Maximum float to return.

#### precision

Type: `Int`  
Default: `undefined`

If `precision` is `undefined`, we will ignore it.

**Note:** 

- Negative `min` and `max` will be treat as `0`
- Non-numeric `min` or `max` will be treat as `0`
- If `min` greater than `max`, we will swap each other
- Non-numeric `precision` will be treat as `undefined`
- If `precision` greater than `20`, then `precision` will be `20`
- If `precision` less than `0`, then `precision` will be `0`


## Related

