import { Injectable } from '@angular/core';
import { Todo } from '../Model/Todo';

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  all:number=0;
  todos:Todo[]
  constructor() {
    this.todos=[]
   }

  logTodo(){}
  addTodo(name:string,description:string){
    this.todos.push(new Todo(this.all++,name,description));
  }
  getTodos():Todo[]{
    return this.todos;
  }
  deleteTodo(id:number){
    this.todos = this.todos.filter(item => item.id !== id);

  }
}
