var expect = require('chai').expect;


describe('random-natural', function () {

  var randomDecimal = require('../../');

  it('randomDecimal()', function () {
    expect(randomDecimal()).to.be.a('number');
    expect(randomDecimal()).to.be.at.least(0);
    expect(randomDecimal()).be.be.below(1);
  });

  it('randomDecimal(2)', function () {
    expect(randomDecimal(2)).to.be.at.least(0);
    expect(randomDecimal(2)).be.be.below(2);
  });

  it('randomDecimal(0, 1, 0)', function () {
    expect(randomDecimal(0, 1, 0)).to.be.oneOf([0, 1]);
  });

  it('randomDecimal(0, 2, 0)', function () {
    expect(randomDecimal(0, 2, 0)).to.be.oneOf([0, 1, 2]);
  });

  it('randomDecimal(0, 2, -1)', function () {
    expect(randomDecimal(0, 2, -1)).to.be.at.least(0);
    expect(randomDecimal(0, 2, -1)).be.be.at.most(2);
  });

  it('randomDecimal(0, 2, 21)', function () {
    expect(randomDecimal(0, 2, 21)).to.be.at.least(0);
    expect(randomDecimal(0, 2, 21)).be.be.below(2);
  });

  it('randomDecimal(2, 10)', function () {
    expect(randomDecimal(2, 10)).to.be.at.least(2);
    expect(randomDecimal(2, 10)).be.be.at.most(10);
  });

  it('randomDecimal(2, 10, 2)', function () {
    expect(randomDecimal(2, 10, 2)).to.match(/^\d\.\d{1,2}$/);
    expect(randomDecimal(2, 10, 2)).to.be.at.least(2);
    expect(randomDecimal(2, 10, 2)).be.be.below(10);
  });

  it('randomDecimal(2, 10, "2")', function () {
    expect(randomDecimal(2, 10, "2")).to.match(/^\d\.\d{1,2}$/);
    expect(randomDecimal(2, 10, "2")).to.be.at.least(2);
    expect(randomDecimal(2, 10, "2")).be.be.below(10);
  });

  it('randomDecimal(2, 10, "foo")', function () {
    expect(randomDecimal(2, 10, "foo")).to.not.match(/^\d\.\d{1,2}$/);
    expect(randomDecimal(2, 10, "foo")).to.be.at.least(2);
    expect(randomDecimal(2, 10, "foo")).be.be.below(10);
  });

  it('randomDecimal(10, 2)', function () {
    expect(randomDecimal(10, 2)).to.be.at.least(2);
    expect(randomDecimal(10, 2)).be.be.below(10);
  });

  it('randomDecimal("2", "10")', function () {
    expect(randomDecimal("2", "10")).to.be.at.least(2);
    expect(randomDecimal("2", "10")).be.be.below(10);
  });

  it('randomDecimal("abc", {a: 1})', function () {
    expect(randomDecimal("abc", {a: 1})).to.be.at.least(0);
    expect(randomDecimal("abc", {a: 1})).be.be.below(1);
  });

  it('randomDecimal(0, 0) should always be 0', function () {
    expect(randomDecimal(0, 0)).to.equal(0);
  });

  it('randomDecimal(1, 1) should always be 1', function () {
    expect(randomDecimal(1, 1)).to.equal(1);
  });

  it('randomDecimal(-1, -1) should always be 0', function () {
    expect(randomDecimal(-1, -1)).to.equal(0);
  });

  it('randomDecimal(0, -1) should always be 0', function () {
    expect(randomDecimal(0, -1)).to.equal(0);
  });

  it('randomDecimal(-1, 0) should always be 0', function () {
    expect(randomDecimal(-1, 0)).to.equal(0);
  });
});
