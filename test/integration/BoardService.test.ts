import PgPromiseConnection from '../../src/infra/database/PgPromiseConnection';
import BoardRepositoryDatabase from '../../src/infra/repository/BoardRepositoryDatabase';
import BoardService from '../../src/service/BoardService';

test('Deve listar os quadros', async () => {
  const connection = new PgPromiseConnection();
  const BoardRepository = new BoardRepositoryDatabase(connection);
  const boardService = new BoardService(BoardRepository);
  const boards = await boardService.getBoards();
  expect(boards).toHaveLength(1);
  const [board] = boards;
  expect(board.name).toBe('Projeto 1');
});
