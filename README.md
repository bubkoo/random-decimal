# random-decimal

> Generate a random decimal.


[![MIT License](https://img.shields.io/badge/license-MIT_License-green.svg?style=flat-square)](https://github.com/mock-end/random-decimal/blob/master/LICENSE)

[![build:?](https://img.shields.io/travis/mock-end/random-decimal/master.svg?style=flat-square)](https://travis-ci.org/mock-end/random-decimal)
[![coverage:?](https://img.shields.io/coveralls/mock-end/random-decimal/master.svg?style=flat-square)](https://coveralls.io/github/mock-end/random-decimal)


## Install

```
$ npm install --save random-decimal
```

## Usage

> For more use-cases see the [tests](https://github.com/mock-end/random-decimal/blob/master/test/spec/index.js)


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

- [random-integral](https://github.com/mock-end/random-integral) - Generate a random integer.
- [random-natural](https://github.com/mock-end/random-natural) - Generate a random natural number.
- [random-index](https://github.com/mock-end/random-index) - Generate a random array-like index.
- [random-hexadecimal](https://github.com/mock-end/random-hexadecimal) - Generate a random hexadecimal number.
- [random-octal](https://github.com/mock-end/random-octal) - Generate a random octal.
- [random-unicode](https://github.com/mock-end/random-unicode) - Generate a random unicode.
- [random-bool](https://github.com/mock-end/random-bool) - Generate a random boolean (true/false).
- [random-char](https://github.com/mock-end/random-char) - Generate a random char.
- [random-lorem](https://github.com/mock-end/random-lorem) - Generate a random world.
- [random-title](https://github.com/mock-end/random-title) - Generate a random title.
- [random-sentence](https://github.com/mock-end/random-sentence) - Generate a random sentence.
- [random-paragraph](https://github.com/mock-end/random-paragraph) - Generate a random paragraph.
- [random-tld](https://github.com/mock-end/random-tld) - Return a random tld.
- [random-domains](https://github.com/mock-end/random-domains) - Generate a random domain name.
- [random-uri](https://github.com/mock-end/random-uri.git) - Generate a random url.
- [random-email](https://github.com/mock-end/random-email) - Generate a random email.
- [random-lang](https://github.com/mock-end/random-lang) - Return a random language name.
- [random-mobile](https://github.com/mock-end/random-mobile) - Generate a random chinese mobile phone number.
- [random-zipcode](https://github.com/mock-end/random-zipcode) - Generate a random chinese zipcode.
- [random-ipv4](https://github.com/mock-end/random-ipv4) - Generate a random ipv4 address.
- [random-ipv6](https://github.com/mock-end/random-ipv6) - Generate a random ipv6 address.
- [random-color](https://github.com/mock-end/random-color) - Generate a random color.


## Contributing

Pull requests and stars are highly welcome.

For bugs and feature requests, please [create an issue](https://github.com/mock-end/random-decimal/issues/new).
