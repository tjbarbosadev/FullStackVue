import Board from '../entities/Board';
import type BoardService from './BoardService';
import type { SaveColumnInput } from './BoardService';
import type HttpClient from '../infra/http/HttpClient';

export default class BoardServiceHttp implements BoardService {
  constructor(readonly httpClient: HttpClient, readonly baseUrl: string) {}

  async getBoard(idBoard: number): Promise<Board> {
    const boardData = await this.httpClient.get(
      `${this.baseUrl}/boards/${idBoard}`
    );
    const board = new Board(idBoard, boardData.name);
    for (const columnData of boardData.columns) {
      board.addColumn(columnData.name, columnData.hasEstimative);
      for (const cardData of columnData.cards) {
        board.addCard(columnData.name, cardData.name, cardData.estimative);
      }
    }

    return board;
  }

  async saveColumn(column: SaveColumnInput): Promise<number> {
    const idColumn = await this.httpClient.post(
      `${this.baseUrl}/boards/${column.idBoard}/columns`,
      column
    );
    return idColumn;
  }
}
