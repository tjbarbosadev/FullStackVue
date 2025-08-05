export default class Card {
  constructor(readonly title: string, public estimative: number) {}

  increaseEstimative(card: Card) {
    card.estimative++;
  }

  decreaseEstimative(card: Card) {
    card.estimative--;
  }
}
