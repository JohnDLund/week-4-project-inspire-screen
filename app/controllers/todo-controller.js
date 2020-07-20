import TodoService from "../services/todo-service.js";
import store from "../store.js";

//TODO Create the render function
function _drawTodos() {
  let template = ""
  store.State.todos.forEach(task => template += task.Template)
  document.getElementById("todos").innerHTML = template

  let numberOfTasks = store.State.todos.length

  store.State.todos.forEach(task => {
    if (task.completed === true) {
      numberOfTasks--
      document.getElementById(task._id).setAttribute("checked", "checked")
      document.getElementById(task.description).innerHTML = '<del>' + task.description + '</del>'
    }
  })
  document.getElementById("numberOfTasks").innerText = numberOfTasks.toString()
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
    event.target.reset()
  }

  toggleTodoStatus(todoId) {
    TodoService.toggleTodoStatusAsync(todoId);
  }

  removeTodo(todoId) {
    TodoService.removeTodoAsync(todoId);
  }
}
