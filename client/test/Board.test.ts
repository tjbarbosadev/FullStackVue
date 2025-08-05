import Board from '../src/entities/Board';

test('Deve criar um quadro', () => {
  const board = new Board(1, 'Projeto 1');
  expect(board.name).toBe('Projeto 1');
  expect(board.columns).toHaveLength(0);
  expect(board.getEstimative()).toBe(0);
});

test('Deve criar um quadro com 3 colunas', () => {
  const board = new Board(1, 'Projeto 1');
  board.addColumn('To do', true);
  board.addColumn('Doing', true);
  board.addColumn('Done', false);
  expect(board.columns[0].name).toBe('To do');
  expect(board.columns[1].name).toBe('Doing');
  expect(board.columns[2].name).toBe('Done');
  expect(board.columns).toHaveLength(3);
});

test('Deve criar um quadro com 3 colunas e cartões', () => {
  const board = new Board(1, 'Projeto 1');
  board.addColumn('To do', true);
  board.addColumn('Doing', true);
  board.addColumn('Done', false);
  board.addCard('To do', 'Tarefa 1', 3);
  board.addCard('To do', 'Tarefa 2', 4);
  board.addCard('To do', 'Tarefa 3', 5);
  expect(board.columns[0].name).toBe('To do');
  expect(board.columns[1].name).toBe('Doing');
  expect(board.columns[2].name).toBe('Done');
  expect(board.columns).toHaveLength(3);
  expect(board.getEstimative()).toBe(12);
});
