import Column from '../src/Column';

test('Deve criar uma coluna com estimativa', () => {
  const column = new Column('Coluna A', true);
  expect(column.name).toBe('Coluna A');
  expect(column.hasEstimative).toBeTruthy();
});

test('Não deve criar uma coluna sem nome', () => {
  expect(() => {
    new Column('', true);
  }).toThrow(new Error('Title is required'));
});
