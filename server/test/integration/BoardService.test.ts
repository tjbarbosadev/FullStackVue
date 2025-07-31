import PgPromiseConnection from '../../src/infra/database/PgPromiseConnection';
import BoardRepositoryDatabase from '../../src/infra/repository/BoardRepositoryDatabase';
import CardRepositoryDatabase from '../../src/infra/repository/CardRepositoryDatabase';
import ColumnsRepositoryDatabase from '../../src/infra/repository/ColumnRepositoryDatabase';
import BoardService from '../../src/service/BoardService';

test('Deve listar os quadros', async () => {
  const connection = new PgPromiseConnection();
  const BoardRepository = new BoardRepositoryDatabase(connection);
  const columnRepository = new ColumnsRepositoryDatabase(connection);
  const cardRepository = new CardRepositoryDatabase(connection);
  const boardService = new BoardService(
    BoardRepository,
    columnRepository,
    cardRepository
  );
  const boards = await boardService.getBoards();
  expect(boards).toHaveLength(1);
  const [board] = boards;
  expect(board.name).toBe('Projeto 1');
  await connection.close();
});

test('Deve trazer dados de um board específico', async () => {
  const connection = new PgPromiseConnection();
  const BoardRepository = new BoardRepositoryDatabase(connection);
  const columnRepository = new ColumnsRepositoryDatabase(connection);
  const cardRepository = new CardRepositoryDatabase(connection);
  const boardService = new BoardService(
    BoardRepository,
    columnRepository,
    cardRepository
  );
  const board = await boardService.getBoard(1);
  expect(board.name).toBe('Projeto 1');
  expect(board.columns).toHaveLength(3);
  const [a, b, c] = board.columns;
  expect(a.name).toBe('Coluna A');
  expect(b.name).toBe('Coluna B');
  expect(c.name).toBe('Coluna C');
  expect(a.estimative).toBe(12);
  expect(b.estimative).toBe(0);
  expect(c.estimative).toBe(0);
  expect(board.estimative).toBe(12);
  const [card1, card2, card3] = a.cards;
  expect(card1.name).toBe('Atividade 1');
  expect(card1.estimative).toBe(3);
  expect(card2.name).toBe('Atividade 2');
  expect(card2.estimative).toBe(4);
  expect(card3.name).toBe('Atividade 3');
  expect(card3.estimative).toBe(5);
  await connection.close();
});
