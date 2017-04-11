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
  describe('#getCards()', function(){
    it('player gets two cards', function(){
      let game = new Blackjack('Tyler', 'Dealer');
      let deck = new Deck();
      let firstCardPlayer = deck.deal();
      let secondCardPlayer = deck.deal();
      assert(firstCardPlayer instanceof Card);
      assert(secondCardPlayer instanceof Card);
      //assert.equal(50, deck.cards.length);
    })
    it('dealer gets two cards', function(){
      let game = new Blackjack('Tyler', 'Dealer');
      let deck = new Deck();
      let firstCardDealer = deck.deal();
      let secondCardDealer = deck.deal();
      assert(firstCardDealer instanceof Card);
      assert(secondCardDealer instanceof Card);
      //assert.equal(48, deck.cards.length);
    })
    it('player can ask for another card', function(){
      let game = new Blackjack('Tyler', 'Dealer');
      let deck = new Deck();
      let additionalCard = deck.deal();
      assert(additionalCard instanceof Card);
      //assert.equal(47, deck.cards.length);
    })
  })
})
