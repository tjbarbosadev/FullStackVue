export default class Column {
  constructor(readonly name: string, readonly hasEstimative: boolean) {
    if (name === '') throw new Error('Title is required');
  }
}
