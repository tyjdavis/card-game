let Card = require('./Card');

function Deck () {
  const suits = ['Hearts', 'Diamonds', 'Clubs', 'Spades'];
  const values = ['Ace', 2, 3, 4, 5, 6, 7, 8, 9, 10, 'Jack', 'Queen', 'King'];
  this.cards = suits.reduce((cards, suit) => {
    return cards.concat(values.reduce((cardsOfSuit, value) => {
      return cardsOfSuit.concat(new Card(suit, value));
    }, []));
  }, []);
  Deck.prototype.deal = function() {
    //let cardPick = this.cards[0]; //this.card is on line 6. which is pretty much the whole deck
    //this.cards.shift(); //removes first element from this.cards
    //return cardPick;
    return this.cards.shift();
    }
  }
module.exports = Deck;
