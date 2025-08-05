<script>
import axios from 'axios';
export default {
  data() {
    return {
      board: {},
      columnName: '',
      cardName: '',
    }
  },
  methods: {
    addColumn(columnName) {
      this.board.columns.push({
        name: columnName,
        cards: []
      })
    },
    addCard(column, cardName) {
      column.cards.push({ name: cardName, estimative: 2 });
      column.estimative += 3;
    }
  },
  computed: {
    boardEestimative() {
      return this.board.columns.reduce((total, column) => {
        total += column.estimative;
        return total;
      }, 0)
    }
  },
  async mounted() {
    const response = await axios({
      url: 'http://localhost:3000/boards/1',
      method: 'get',
    });
    this.board = response.data;
  }
}
</script>
<template>
  <div v-if="board">
    <h3>{{ board.name }} - {{ boardEestimative }}</h3>
    <div class="columns">
      <div class="column" v-for="column in board.columns">
        <h4>{{ column.name }} - {{ column.estimative }}</h4>
        <div class="card" v-for="card in column.cards">
          {{ card.name }} - {{ card.estimative }}
        </div>
        <div class="card new-card">
          <input type="text" v-model="cardName" />
          <button v-on:click="addCard(column, cardName)">Create</button>
        </div>
      </div>
      <div class="column new-column">
        <input type="text" v-model="columnName" />
        <button v-on:click="addColumn(columnName)">Create</button>
      </div>
    </div>
  </div>
</template>
<style scoped>
.columns {
  display: flex;
  flex-direction: row;
}

.column {
  width: 200px;
  text-align: center;
  background-color: #CCC;
  margin-right: 5px;
  padding: 10px;
  border: 1px solid #000;
}

.new-column {
  background-color: #EEE;
  border: 1px dashed #CCC;
  display: block;
}

.card {
  text-align: center;
  width: 100%;
  height: 80px;
  background-color: #F3E779;
  border: 1px solid #000;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
}

.new-card {
  background-color: #EEE;
  border: 1px dashed #CCC;
  display: block;
}
</style>