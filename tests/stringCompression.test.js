var stringCompression = require('../exercises/Strings/stringCompression');
var expect = require('chai').expect;

describe('stringCompression', function() {

  it('expect stringCompression to be a function', function () {
    expect(stringCompression).to.be.function;
  })

  it('expect stringCompression to return a2b1c5a3', function () {
    expect(stringCompression('aabcccccaaa')).to.equal('a2b1c5a3')
  });

  it('expect stringCompression to return abcdefg', function () {
    expect(stringCompression('abcdefg')).to.equal('abcdefg')
  });

});