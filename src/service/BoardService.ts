import Board from '../domain/entity/Board';
import pgp from 'pg-promise';
import BoardRepository from '../domain/repository/BoardRepository';

export default class BoardService {
  constructor(readonly boardRepository: BoardRepository) {}

  async getBoards(): Promise<Board[]> {
    const boards = await this.boardRepository.findAll();
    return boards;
  }
}
