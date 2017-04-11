let Card = require('./Card');
let Deck = require('./Deck');

let playerDeck = [];
let dealerDeck = [];

function Blackjack (player, dealer, deck) {
  this.player = player;
  this.dealer = dealer;
  this.deck = deck;
}


Blackjack.prototype.getCards = function (){

}

module.exports = Blackjack;
