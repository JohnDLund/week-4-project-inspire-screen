
export default class ToDoList {
  constructor(data) {
    this._id = data._id
    this.description = data.description
    this.user = data.user
    this.completed = data.completed
  }


  get Template() {
    let template = /*html*/`
   
      <li class="list-group-item text-capitalize">
         <input type="checkbox"  id="${this.description}" class="mr-2" onchange="app.todoController.toggleTodoStatus('${this._id}')">
         ${this.description}
         <div class=" d-flex justify-content-end">
          <button class="btn btn-sm btn-outline-danger" type="button">Delete</button>
        </div>
      </li>
     
    
   
    `


    return template
  }
}