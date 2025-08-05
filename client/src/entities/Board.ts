import DomainEvent from '../events/DomainEvents';
import BaseEntity from './BaseEntity';
import Card from './Card';
import Column from './Column';

export default class Board extends BaseEntity {
  columns: Column[];

  constructor(readonly idBoard: number, readonly name: string) {
    super();
    this.columns = [];
  }

  addColumn(name: string, hasEstimative: boolean) {
    this.columns.push(new Column(name, hasEstimative));
    this.publish(
      new DomainEvent('addColumn', {
        idBoard: this.idBoard,
        name,
        hasEstimative,
      })
    );
  }

  addCard(columnName: string, cardTitle: string, cardEstimative: number) {
    const [column] = this.columns.filter((column) => column.name == columnName);
    column.cards.push(new Card(cardTitle, cardEstimative));
  }

  increaseEstimative(card: Card) {
    card.increaseEstimative(card);
  }

  decreaseEstimative(card: Card) {
    card.decreaseEstimative(card);
  }

  getEstimative() {
    return this.columns.reduce((total: number, column: any) => {
      total += column.getEstimative();
      return total;
    }, 0);
  }
}
