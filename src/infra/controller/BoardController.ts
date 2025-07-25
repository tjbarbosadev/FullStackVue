import BoardService from '../../service/BoardService';
import CardService from '../../service/CardService';
import ColumnService from '../../service/ColumnService';
import Connection from '../database/Connection';
import Http from '../http/Http';
import BoardRepositoryDatabase from '../repository/BoardRepositoryDatabase';
import CardRepositoryDatabase from '../repository/CardRepositoryDatabase';
import ColumnsRepositoryDatabase from '../repository/ColumnRepositoryDatabase';

export default class BoardController {
  constructor(readonly http: Http, readonly connection: Connection) {
    http.route('get', '/boards', async (params: any, body: any) => {
      const boardRepository = new BoardRepositoryDatabase(connection);
      const boardService = new BoardService(boardRepository);
      const boards = await boardService.getBoards();
      return boards;
    });

    http.route(
      'get',
      '/boards/:idBoard/columns',
      async (params: any, body: any) => {
        const columnRepository = new ColumnsRepositoryDatabase(connection);
        const columnService = new ColumnService(columnRepository);
        const columns = await columnService.getColumns(
          parseInt(params.idBoard)
        );
        return columns;
      }
    );

    http.route(
      'get',
      '/boards/:idBoard/columns/:idColumn/cards',
      async (params: any, body: any) => {
        const cardRepository = new CardRepositoryDatabase(connection);
        const cardService = new CardService(cardRepository);
        const cards = await cardService.getCards(parseInt(params.idColumn));
        return cards;
      }
    );
  }
}
