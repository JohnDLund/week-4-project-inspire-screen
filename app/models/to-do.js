
export default class ToDoList {
  constructor(data) {
    this._id = data._id
    this.description = data.description
    this.user = data.user
    this.completed = data.completed
  }


  get Template() {
    let template = /*html*/`
   
      <li class="list-group-item text-capitalize d-flex justify-content-between">
         <input type="checkbox"  id="${this._id}" class="mr-2 align-self-center" onchange="app.todoController.toggleTodoStatus('${this._id}')">
         <div id="${this.description}">${this.description}</div>
          <button class="btn btn-sm btn-outline-danger" type="button" onclick="app.todoController.removeTodo('${this._id}')">Delete</button>
      </li>
     
    
   
    `


    return template
  }
}