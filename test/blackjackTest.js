// A game (for our purposes) has one player and a dealer - done

// At the start of the game, the player gets two cards and so does the dealer -done

// The player can ask for another card
// The player can repeat that request as many times as desired

// Once the player doesn't want any more cards, the dealer will ask for more cards until the dealer's hand is worth at least 17

// For today, assume that an Ace is worth 1, a face card (Jack, Queen, or King) is worth 10, and any other card is worth its number

const assert = require('assert');
const Blackjack = require('../lib/Blackjack.js');
const Card = require('../lib/Card');
const Deck = require('../lib/Deck')


describe('Blackjack', function () {
  it('has a player and a dealer', function() {
    let game = new Blackjack('Tyler', 'Dealer');
    assert.equal(game.player, 'Tyler');
    assert.equal(game.dealer, 'Dealer');
  })
  describe('#gameBegin()', function(){
    it('player gets two cards', function(){
      let game = new Blackjack('Tyler', 'Dealer');
      let gameBegin = game.gameBegin();
      assert.equal(game.playerDeck.length, 2);
    })
    it('dealer gets two cards', function(){
      let game = new Blackjack('Tyler', 'Dealer');
      let gameBegin = game.gameBegin();
      assert.equal(game.dealerDeck.length, 2);
    })
  })
  describe('#hitMe()', function () {
    it('player can ask for more cards', function(){
    let game = new Blackjack('Tyler', 'Dealer');
    let hitMe = game.hitMe();
    assert(hitMe );
    })
  })
})
