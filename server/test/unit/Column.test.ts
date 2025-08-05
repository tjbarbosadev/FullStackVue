import Column from '../../src/domain/entity/Column';

test('Deve criar uma coluna com estimativa', () => {
  const column = new Column(1, 1, 'Coluna A', true);
  expect(column.name).toBe('Coluna A');
  expect(column.hasEstimative).toBeTruthy();
});

test('Não deve criar uma coluna sem nome', () => {
  expect(() => {
    new Column(1, 1, '', true);
  }).toThrow(new Error('Title is required'));
});
