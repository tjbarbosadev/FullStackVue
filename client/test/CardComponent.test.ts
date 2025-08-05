import { mount } from '@vue/test-utils';
import CardComponent from '../src/components/CardComponent.vue';
import Board from '../src/entities/Board';

test('Deve testar o card component', async () => {
  const board = new Board(1, 'Projeto 1');

  board.addColumn('Todo', true);
  board.addCard('Todo', 'Tarefa 1', 3);
  board.addCard('Todo', 'Tarefa 2', 2);
  board.addCard('Todo', 'Tarefa 3', 1);

  const [column] = board.columns;
  const [card1, card2] = column.cards;

  const wrapper1 = mount(CardComponent, {
    props: { board, column, card: card1 },
  });
  expect(wrapper1.get('#title').text()).toBe('Tarefa 1');
  expect(wrapper1.get('#estimative').text()).toBe('3');

  const wrapper2 = mount(CardComponent, {
    props: { board, column, card: card2 },
  });
  expect(wrapper2.get('#title').text()).toBe('Tarefa 2');
  expect(wrapper2.get('#estimative').text()).toBe('2');

  await wrapper2.get('.increase-estimative').trigger('click');
  expect(wrapper2.get('#estimative').text()).toBe('3');

  await wrapper2.get('.decrease-estimative').trigger('click');
  expect(wrapper2.get('#estimative').text()).toBe('2');
});
