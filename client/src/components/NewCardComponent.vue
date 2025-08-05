<script setup lang="ts">
import { ref } from 'vue';

defineProps(['board', 'column']);
let cardName = ref('');
</script>

<template>
  <div class="new-card">
    <input type="text" v-model="cardName" />
    <button v-on:click="board.addCard(column.name, cardName, 0)">Create</button>
  </div>
</template>

<style scoped>
.new-card {
  text-align: center;
  width: 100%;
  height: 80px;
  margin-bottom: 10px;
  align-items: center;
  background-color: #EEE;
  border: 1px dashed #CCC;
  display: block;
}
</style>