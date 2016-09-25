var stringElement = require('../exercises/Strings/stringElement');
var expect = require('chai').expect;

describe('stringElement', function() {

  const elements = {
    H: '[H]',
    O: '[O]',
    BR: '[Br]',
    AG: '[Ag]'
  }

  it('expect stringElement to be a function', function () {
    expect(stringElement).to.be.function;
  })

  it('expect "again" to return "[Ag]ain"', function () {
    expect(stringElement('again', elements)).to.equal('[Ag]ain');
  });

  it('expect "ainh" to return "ain[H]"', function () {
    expect(stringElement('ainh', elements)).to.equal('ain[H]');
  });

});