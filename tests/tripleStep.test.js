var tripleStep = require('../exercises/Recursion/tripleStep');
var expect = require('chai').expect;

describe('tripleStep', function() {

  it('expect tripleStep to be a function', function () {
    expect(tripleStep).to.be.function;
  })

  it('expect tripleStep to return a 0', function () {
    expect(tripleStep(0)).to.equal(0);
  });

  it('expect tripleStep to return a 4', function () {
    expect(tripleStep(3)).to.equal(4);
  });

  it('expect tripleStep to return a 13', function () {
    expect(tripleStep(5)).to.equal(13);
  });

  it('expect tripleStep to return a 44', function () {
    expect(tripleStep(7)).to.equal(44);
  });

});