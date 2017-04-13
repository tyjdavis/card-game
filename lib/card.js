function Card (value, suit) {
  this.suit = suit;
  this.value = value;
}

let cardValue = {
  2: 'two',
  3: 'three',
  4: 'four',
  5: 'five',
  6: 'six',
  7: 'seven',
  8: 'eight',
  9: 'nine',
  10: 'ten'
}

Card.prototype.toString = function () {

  if (this.value >= 2 && this.value <= 10) {
    return `${cardValue[this.value]} of ${this.suit}`;
  }
  else {
    return `${this.value} of ${this.suit}`;
  }
}

Card.prototype.cardValue = function () {
  if (Deck.values.includes('Ace')) {
    return 1;
  } else if (Deck.values.includes('Jack', 'Queen', 'King')) {
    return 10;
  }
  return Deck.values;
}

module.exports = Card;
