import axios from 'axios';

test('Deve retornar os quadros por meio da API', async () => {
  const response = await axios({
    url: 'http://localhost:3000/boards',
    method: 'get',
  });
  const boards = response.data;
  expect(boards).toHaveLength(1);
  const [board] = boards;
  expect(board.name).toBe('Projeto 1');
});

test('Deve retornar as colunas de um quadro por meio da API', async () => {
  const response = await axios({
    url: 'http://localhost:3000/boards/1/columns',
    method: 'get',
  });

  const columns = response.data;
  expect(columns).toHaveLength(3);
  const [column1, column2, column3] = columns;
  expect(column1.name).toBe('Coluna A');
  expect(column1.hasEstimative).toBe(true);
  expect(column2.name).toBe('Coluna B');
  expect(column3.name).toBe('Coluna C');
});

test('Deve retornar os cartões de uma coluna por meio da API', async () => {
  const response = await axios({
    url: 'http://localhost:3000/boards/1/columns/1/cards',
    method: 'get',
  });

  const cards = response.data;
  expect(cards).toHaveLength(3);
  const [card1, card2, card3] = cards;
  expect(card1.title).toBe('Atividade 1');
  expect(card2.title).toBe('Atividade 2');
  expect(card3.title).toBe('Atividade 3');
});
