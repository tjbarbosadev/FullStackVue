import express from 'express';
import pgp from 'pg-promise';
import Board from './entity/Board';
import Column from './entity/Column';
import Card from './entity/Card';

const app = express();
const connection = pgp()(
  'postgres://postgres:admin123@localhost:5432/postgres'
);

app.get('/boards', async (req, res) => {
  const boardsData = await connection.query('select * from vuefs.board', []);
  const boards: Board[] = [];

  for (const boardData of boardsData) {
    boards.push(new Board(boardData.name));
  }

  console.log(boards);
  res.json(boards);
});

app.get('/boards/:idBoard/columns', async (req, res) => {
  const columnsData = await connection.query(
    'select * from vuefs.column where id_board = $1',
    [req.params.idBoard]
  );
  const columns: Column[] = [];

  for (const columnData of columnsData) {
    columns.push(new Column(columnData.name, columnData.has_estimative));
  }

  console.log(columns);
  res.json(columns);
});

app.get('/boards/:idBoard/columns/:idColumn/cards', async (req, res) => {
  const cardsData = await connection.query(
    'select * from vuefs.card where id_column = $1',
    [req.params.idColumn]
  );
  const cards: Card[] = [];

  for (const cardData of cardsData) {
    cards.push(new Card(cardData.title, cardData.estimative));
  }

  console.log(cards);
  res.json(cards);
});

app.listen(3000);
