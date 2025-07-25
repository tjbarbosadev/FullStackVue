import Card from '../entity/Card';
import pgp from 'pg-promise';

export default class CardService {
  constructor() {}

  async getCards(idColumn: number): Promise<Card[]> {
    const connection = pgp()(
      'postgres://postgres:admin123@localhost:5432/postgres'
    );
    const cardsData = await connection.query(
      'select * from vuefs.card where id_column = $1',
      [idColumn]
    );

    const cards: Card[] = [];

    for (const cardData of cardsData) {
      cards.push(new Card(cardData.title, cardData.estimative));
    }
    await connection.$pool.end();
    return cards;
  }
}
