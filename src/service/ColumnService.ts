import Column from '../entity/Column';
import pgp from 'pg-promise';

export default class ColumnService {
  constructor() {}

  async getColumns(idBoard: number): Promise<Column[]> {
    const connection = pgp()(
      'postgres://postgres:admin123@localhost:5432/postgres'
    );
    const columnsData = await connection.query(
      'select * from vuefs.column where id_board = $1',
      [idBoard]
    );
    const columns: Column[] = [];

    for (const columnData of columnsData) {
      columns.push(new Column(columnData.name, columnData.has_estimative));
    }

    console.log(columns);
    await connection.$pool.end();
    return columns;
  }
}
