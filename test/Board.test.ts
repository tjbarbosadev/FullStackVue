import Board from '../src/Board';

test('Deve criar um quadro', function () {
  const board = new Board('Projeto 1');
  expect(board.name).toBe('Projeto 1');
});
