import { mount } from '@vue/test-utils';
import Board from '../src/entities/Board';
import NewColumnComponent from '../src/components/NewColumnComponent.vue';
import type DomainEvent from '../src/events/DomainEvents';

test('Deve testar o column component', async () => {
  const board = new Board(1, 'Projeto 1');

  board.addColumn('Todo', true);

  board.addCard('Todo', 'Atividade 1', 3);
  board.addCard('Todo', 'Atividade 2', 4);
  board.addCard('Todo', 'Atividade 3', 5);

  const events: DomainEvent[] = [];

  board.on('addColumn', (event: DomainEvent) => {
    events.push(event);
  });

  const wrapper = mount(NewColumnComponent, {
    props: { board },
  });

  await wrapper.get('.new-column-input').setValue('Todo');
  await wrapper.get('.new-column-add').trigger('click');

  expect(board.columns).toHaveLength(2);

  const [event] = events;
  expect(event.name).toBe('addColumn');
  expect(event.data.name).toBe('Todo');
});
