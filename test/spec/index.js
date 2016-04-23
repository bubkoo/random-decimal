var expect = require('chai').expect;

var MAX_SAFE_INT = require('max-safe-int');


describe('random-decimal', function () {

  var randomDecimal = require('../../');

  it('common', function () {

    expect(randomDecimal()).to.be.a('number');
    expect(randomDecimal()).to.be.within(0, MAX_SAFE_INT);
    expect(randomDecimal()).to.be.match(/(\d+.[\d]{1,4})?$/);


    expect(randomDecimal({
      max: 2
    })).be.be.within(0, 2);

    expect(randomDecimal({
      max: 2,
      fixed: 0
    })).be.be.oneOf([0, 1, 2]);

    expect(randomDecimal({
      max: 2,
      fixed: 2
    })).be.be.match(/([012].[\d]{1,2})?$/);

    expect(randomDecimal({
      max: 'abc',
      fixed: 2
    })).be.be.match(/([012].[\d]{1,2})?$/);

    expect(randomDecimal({
      min: 'abc',
      fixed: 2
    })).be.be.match(/(\d+.[\d]{1,2})?$/);

    expect(randomDecimal({
      min: 2,
      max: 1,
      fixed: 2
    })).be.be.match(/([12].[\d]{1,2})?$/);

    expect(randomDecimal({
      min: 1,
      max: 1,
    })).be.be.equal(1);

    expect(randomDecimal({
      min: -1,
      max: -1,
    })).be.be.equal(0);

    expect(randomDecimal({
      min: 0,
      max: -1,
    })).be.be.equal(0);

    expect(randomDecimal({
      min: -1,
      max: 0,
    })).be.be.equal(0);

    expect(randomDecimal({
      max: '2',
      fixed: '2'
    })).be.be.match(/([012].[\d]{1,2})?$/);

    expect(randomDecimal({
      max: '2',
      fixed: 'asd'
    })).be.be.match(/([012].[\d]{1,17})?$/);

  });
});
