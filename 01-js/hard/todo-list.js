/*
  Implement a class `Todo` having below methods
    - add(todo): adds todo to list of todos
    - remove(indexOfTodo): remove todo from list of todos
    - update(index, updatedTodo): update todo at given index
    - getAll: returns all todos
    - get(indexOfTodo): returns todo at given index
    - clear: deletes all todos

  Once you've implemented the logic, test your code by running
*/

class Todo {
  constructor() {
    this.list = [];
  }
  add(str) {
    return this.list.push(str);
  }
  remove(strIdx) {
    return this.list.splice(strIdx, 1);
  }
  update(todoIdx, updatedTodo) {
    if (this.list[todoIdx]) {
      return this.list.splice(todoIdx, 1, updatedTodo);
    }
  }
  getAll() {
    return this.list;
  }
  get(todoIdx) {
    if (this.list[todoIdx] !== undefined) {
      return this.list[todoIdx];
    } else {
      return null;
    }
  }
  clear() {
    return this.list.splice(0);
  }
}

module.exports = Todo;
