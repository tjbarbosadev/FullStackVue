import { mount } from '@vue/test-utils';
import Board from '../src/entities/Board';
import BoardComponent from '../src/components/BoardComponent.vue';

test('Deve testar o board component', async () => {
  const board = new Board(1, 'Projeto 1');
  board.addColumn('Todo', true);
  board.addColumn('Doing', true);
  board.addColumn('Done', false);
  board.addCard('Todo', 'Atividade 1', 3);
  board.addCard('Todo', 'Atividade 2', 4);
  board.addCard('Todo', 'Atividade 3', 5);
  board.addCard('Todo', 'Atividade 4', 6);

  const wrapper = mount(BoardComponent, {
    props: { board },
  });
  expect(wrapper.get('#estimative').text()).toBe('18');
});
