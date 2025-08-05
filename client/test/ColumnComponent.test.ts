import { mount } from '@vue/test-utils';
import Board from '../src/entities/Board';
import ColumnComponent from '../src/components/ColumnComponent.vue';

test('Deve testar o column component', async () => {
  const board = new Board(1, 'Projeto 1');

  board.addColumn('Todo', true);
  board.addColumn('Doing', true);

  board.addCard('Todo', 'Atividade 1', 3);
  board.addCard('Todo', 'Atividade 2', 4);
  board.addCard('Todo', 'Atividade 3', 5);

  board.addCard('Doing', 'Atividade 4', 6);
  board.addCard('Doing', 'Atividade 5', 5);
  board.addCard('Doing', 'Atividade 6', 4);

  const [column1, column2] = board.columns;

  const wrapper1 = mount(ColumnComponent, {
    props: { board, column: column1 },
  });
  const wrapper2 = mount(ColumnComponent, {
    props: { board, column: column2 },
  });

  expect(wrapper1.get('#estimative').text()).toBe('12');
  expect(wrapper2.get('#estimative').text()).toBe('15');
});
