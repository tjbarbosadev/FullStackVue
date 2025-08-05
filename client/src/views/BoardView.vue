<script setup lang="ts">
import { inject, onMounted, reactive } from 'vue';
import Board from '../entities/Board';
import type BoardService from '../services/BoardService';
import BoardComponent from '../components/BoardComponent.vue';
import type DomainEvent from '../events/DomainEvents';

const data: { board: Board | undefined } = reactive({ board: undefined });

// Lifecycle hooks
onMounted(async () => {
  const boardService = inject('boardService') as BoardService;
  const board = await boardService.getBoard(1);

  board.on('addColumn', async (event: DomainEvent) => {
    await boardService.saveColumn(event.data);
  });

  data.board = board;
})
</script>

<template>
  <BoardComponent :board="data.board"></BoardComponent>
</template>

<style scoped></style>