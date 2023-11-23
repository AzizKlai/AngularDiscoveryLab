import { Component, inject } from '@angular/core';
import { TodoService } from '../todo.service';
import { Todo } from 'src/app/Model/Todo';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent {
  todoService:TodoService=inject(TodoService)
  todos:Todo[]=[];
  name:string=""
  description:string="" 
  addTodo(){
    if(this.name.length>0 && this.name.length>0 )
    this.todoService.addTodo(this.name,this.description)
  this.todos=this.todoService.getTodos()
 // this.name="";this.description="";
  }

  deleteTodo(id:number){
    this.todoService.deleteTodo(id);
  this.todos=this.todoService.getTodos()


  }

}
