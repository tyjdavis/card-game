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
  //once the dealer gets more than 2 then you know that the player is done.
}

module.exports = Blackjack;
