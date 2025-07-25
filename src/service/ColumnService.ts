import Column from '../domain/entity/Column';
import ColumnRepository from '../domain/repository/ColumnRepository';

export default class ColumnService {
  constructor(readonly columnRepository: ColumnRepository) {}

  async getColumns(idBoard: number): Promise<Column[]> {
    const columns = this.columnRepository.findAllByIdBoard(idBoard);
    return columns;
  }
}
