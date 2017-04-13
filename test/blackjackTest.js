// A game (for our purposes) has one player and a dealer - done

// At the start of the game, the player gets two cards and so does the dealer -done

// The player can ask for another card -done
// The player can repeat that request as many times as desired -done

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
      assert.equal(game.playerDeck.length, 2);
    })
    it('dealer gets two cards', function(){
      let game = new Blackjack('Tyler', 'Dealer');
      assert.equal(game.dealerDeck.length, 2);
    })
  })
  describe('#hit()', function () {
    it('player can ask for more cards', function(){
    let game = new Blackjack('Tyler', 'Dealer');
    game.hit(game.playerDeck);
    assert.equal(game.playerDeck.length, 3);
    })
    it('dealer can ask for more cards', function(){
      let game = new Blackjack('Tyler', 'Dealer');
      game.hit(game.dealerDeck);
      assert.equal(game.dealerDeck.length, 3);
    })
  })
  describe('#dealerHand', function (){
    it('dealer has a deck of card values', function() {
    let game = new Blackjack('Tyler', 'Dealer');
    game.dealerHand(game.dealerDeck);
    assert(game.dealerDeck.value);
    })
  })
   describe('#dealer17', function () {
    it('dealer hand has a value of 17', function () {
    let game = new Blackjack('Tyler', 'Dealer');
    game.dealer17(game.dealerDeck);
    assert.equal(game.dealerDeck.value >= 17, true);
    })
  })
})

  // })
  // describe('#dealerHand()', function (){
  //   it('dealer gets cards until at least 17', function(){
  //   let game = new Blackjack('Tyler', 'Dealer');
  //   let dealerHand = game.dealerHand();
  //   assert(dealerHand);
    //})
