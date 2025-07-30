drop table vuefs.card;
drop table vuefs.column;
drop table vuefs.board;

create table vuefs.board (
  id_board serial primary key,
  name text
);

create table vuefs.column (
  id_column serial primary key,
  id_board integer references vuefs.board (id_board),
  name text,
  has_estimative boolean
);

create table vuefs.card (
  id_card serial primary key,
  id_column integer references vuefs.column (id_column),
  title text,
  estimative integer
);

insert into vuefs.board(name) values ('Projeto 1');
insert into vuefs.column (id_board, name, has_estimative) values (1, 'Coluna A', true);
insert into vuefs.column (id_board, name, has_estimative) values (1, 'Coluna B', true);
insert into vuefs.column (id_board, name, has_estimative) values (1, 'Coluna C', true);
insert into vuefs.card(id_column, title, estimative) values (1, 'Atividade 1', 3);
insert into vuefs.card(id_column, title, estimative) values (1, 'Atividade 2', 4);
insert into vuefs.card(id_column, title, estimative) values (1, 'Atividade 3', 5);