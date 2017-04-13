let Card = require('./Card');
let Deck = require('./Deck');


function Blackjack (player, dealer) {
  this.player = player;
  this.dealer = dealer;
  this.deck = new Deck;
  this.playerDeck = [];
  this.dealerDeck = [];
  this.gameBegin();
}

Blackjack.prototype.gameBegin = function() {
  for(let i = 0; i < 2; i ++) {
    this.getCardsPlayer();
    this.getCardsDealer();
  }
}

Blackjack.prototype.getCardsPlayer = function () {
  this.playerDeck.push(this.deck.deal());
}

Blackjack.prototype.getCardsDealer = function () {
  this.dealerDeck.push(this.deck.deal());
}

Blackjack.prototype.hit = function (deck) {
  deck.push(this.deck.deal());
  //this.dealerDeck.value = 17;
}

Blackjack.prototype.dealerHand = function () {
  this.dealerDeck.value = this.deck.deal();
}

Blackjack.prototype.dealer17 = function () {
  while (this.dealerDeck.value <= 17) {
    this.deck.deal();
  }
}




Blackjack.prototype.cardValue = function () {
  if (Deck.cards.values.includes('Ace')) {
    return 1;
  } else if (Deck.cards.values.includes('Jack', 'Queen', 'King')) {
    return 10;
  }
  return Deck.cards.values;
}





module.exports = Blackjack;
