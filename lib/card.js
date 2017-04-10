function Card (value, suit) {
  this.suit = suit;
  this.value = value;
}
Card.prototype.toString = function () {
  return `${this.value} of ${this.suit}`;
}
module.exports = Card;
