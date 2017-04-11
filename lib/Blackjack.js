let Card = require('./Card');
let Deck = require('./Deck');


function Blackjack (player, dealer) {
  this.player = player;
  this.dealer = dealer;
  this.deck = new Deck;
}

let playerDeck = [];
let dealerDeck = [];


Blackjack.prototype.getCardsPlayer = function (){
  return playerDeck.push(this.deck.cards.shift());
}

Blackjack.prototype.getCardsDealer = function (){
  return dealerDeck.push(this.deck.cards.shift());
}

module.exports = Blackjack;
