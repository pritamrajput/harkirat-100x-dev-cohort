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
constructor(){
  this.todoList = [];
}

  add(todo){
    this.todoList.push(todo);
  }

  update(indexOfTodo, updatedTodo){
    if(indexOfTodo >= 0 && indexOfTodo < this.todoList.length){
      this.todoList[indexOfTodo] = updatedTodo;
    }
    else{
      console.log("Invalid index, todo not updated");
    }
  }
  
  remove(indexOfTodo){
    if(indexOfTodo >= 0 && indexOfTodo < this.todoList.length){
      this.todoList.splice(indexOfTodo,1);
    }
    else{
      console.log("Index of todo is incorrect");
    }
  }

  get(indexOfTodo){
    if(indexOfTodo >= 0 && indexOfTodo < this.todoList.length){
      return this.todoList[indexOfTodo];
    }
    else{
      return null;
    }
  }

  getAll(){
    return this.todoList;
  }

  clear(){
    this.todoList = [];
  }
}
module.exports = Todo;
