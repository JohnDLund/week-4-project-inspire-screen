import store from "../store.js";
import ToDoList from "../models/to-do.js";

// @ts-ignore
const todoApi = axios.create({
  baseURL: "https://bcw-sandbox.herokuapp.com/api/JohnLund/todos/",
  timeout: 8000
})

class TodoService {
  constructor() {
    this.getTodos()
  }



  getTodos() {
    todoApi.get("").then(res => {
      console.log(res.data.data)
      store.commit("todos", res.data.data.map(rawTodoData => new ToDoList(rawTodoData)))
    }).catch(err => console.error(err))
  }

  addTodoAsync(rawTodoObject) {
    todoApi.post("", rawTodoObject).then(res => {
      this.getTodos()
    }).catch(err => console.error(err))
  }

  toggleTodoStatusAsync(todoId) {
    let todo = store.State.todos.find(todo => todo._id == todoId);
    todo.completed === false ? todo.completed = true : todo.completed = false



    todoApi.put(todoId, todo).then(res => {
      this.getTodos()
    }).catch(err => console.error(err))
  }

  removeTodoAsync(todoId) {

    //TODO Work through this one on your own
    //		what is the request type
    //		once the response comes back, what do you need to insure happens?
  }
}

const todoService = new TodoService();
export default todoService;
