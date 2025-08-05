import { mount } from '@vue/test-utils';
import BoardView from '../src/views/BoardView.vue';
import type BoardService from '../src/services/BoardService';
import Board from '../src/entities/Board';

const sleep = (ms: number) => {
  return new Promise((resolve, _reject) => {
    setTimeout(() => resolve(true), ms);
  });
};

test('Deve testar o board view', async () => {
  const boardService: BoardService = {
    async getBoard(_idBoard: number) {
      const board = new Board(1, 'Projeto 1');
      board.addColumn('Todo', true);
      board.addColumn('Doing', true);
      board.addColumn('Done', false);
      board.addCard('Todo', 'Atividade 1', 3);
      board.addCard('Todo', 'Atividade 2', 4);
      board.addCard('Todo', 'Atividade 3', 5);
      return board;
    },
  };

  // const boardService = new BoardServiceHttp();
  const wrapper = mount(BoardView, {
    global: {
      provide: {
        boardService,
      },
    },
  });
  await sleep(20);
  expect(wrapper.get('#estimative').text()).toBe('12');
});
