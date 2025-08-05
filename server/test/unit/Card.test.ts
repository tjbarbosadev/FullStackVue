import Card from '../../src/domain/entity/Card';

test('Deve criar um cartão', () => {
  const card = new Card(1, 1, 'Atividade 1', 3);
  expect(card.title).toBe('Atividade 1');
  expect(card.estimative).toBe(3);
});

test('Não deve criar um cartão sem título', () => {
  expect(() => {
    new Card(1, 1, '', 2);
  }).toThrow(new Error('Title is required'));
});

test('Não deve criar uma estimativa negativa', () => {
  expect(() => {
    new Card(1, 1, 'Atividade 2', -2);
  }).toThrow(new Error('Estimative has to be positive'));
});
