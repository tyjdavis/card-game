let Card = require('./Card');
let Deck = require('./Deck');


function Blackjack (player, dealer) {
  this.player = player;
  this.dealer = dealer;
  this.deck = new Deck;
  this.playerDeck = [];
  this.dealerDeck = [];
}

Blackjack.prototype.gameBegin = function() {
  for(let i = 0; i < 2; i ++) {
    this.getCardsPlayer();
    this.getCardsDealer();
  }

}

Blackjack.prototype.getCardsPlayer = function (){
  this.playerDeck.push(this.deck.deal());
}

Blackjack.prototype.getCardsDealer = function (){
  this.dealerDeck.push(this.deck.deal());
}

Blackjack.prototype.hitMe = function () {
  while (this.dealerDeck < 2) {
  return this.getCardsPlayer;
  }
}

Blackjack.prototype.dealerHand = function () {
  let cardWorth = this.cards;
  if (cardWorth <= 17) {
  return this.getCardsDealer;
  }
}

module.exports = Blackjack;
