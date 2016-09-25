var coin = require('../exercises/Recursion/coin');
var expect = require('chai').expect;

describe('stringCompression', function() {

  it('expect 1 to equal 1', function() {
    expect(coin(1)).to.equal(1);
  });

  it('expect 3 to equal 1', function() {
    expect(coin(3)).to.equal(1);
  });

  it('expect 5 to equal 2', function() {
    expect(coin(5)).to.equal(2);
  });

  it('expect 9 to equal 2', function() {
    expect(coin(9)).to.equal(2);
  });

  it('expect 10 to equal 4', function() {
    expect(coin(10)).to.equal(4);
  });

});