import TodoService from "../services/todo-service.js";
import store from "../store.js";
import Todos from "../Models/to-do.js"

//TODO Create the render function
function _drawTodos() {
  let template = ""
  store.State.todos.forEach(task => template += task.Template)
  document.getElementById("todos").innerHTML = template
  store.State.todos.forEach(task => {
    if (task.completed === true) {
      document.getElementById(task.description).setAttribute("checked", "checked")
    }
  })


  // if (this.completed = false) {
  //   document.getElementById("${this.description}").setAttribute("checked", "checked")
}


export default class TodoController {
  constructor() {
    store.subscribe("todos", _drawTodos);
  }

  addTodo(event) {
    event.preventDefault()
    console.log(event.target.createNewTask.value);
    var rawTodoObject = {
      description: event.target.createNewTask.value,
      completed: false
    };
    TodoService.addTodoAsync(rawTodoObject);
  }

  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  //NOTE This method will pass an Id to your service for the TODO that will need to be deleted
  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
