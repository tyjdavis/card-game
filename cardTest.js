var assert = require('assert');
let Card = require('./Card');

describe('Card', function() {
  it('has a suit', function () {
    let card = new Card(3, 'Clubs');
    assert.equal('Clubs', card.suit);
  });

  it('has a value', function () {
    let card = new Card(3, 'Clubs');
    assert.equal(3, card.value);
  });

  describe('#toString()', function() {
    it('should return a string containing suit and value', function() {
      let card = new Card(3, 'Clubs');
      assert.equal('3 of Clubs', card.toString());
    });
  });
});
