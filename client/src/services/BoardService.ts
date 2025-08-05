import type Board from '../entities/Board';

export default interface BoardService {
  getBoard(idBoard: number): Promise<Board>;
  saveColumn(column: SaveColumnInput): Promise<number>;
  saveCard(card: SaveColumnInput): Promise<number>;
}

export type SaveColumnInput = {
  idBoard: number;
  name: string;
  hasEstimative: boolean;
};
