import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Todo } from 'src/app/Model/Todo';

@Component({
  selector: 'app-todo-item',
  templateUrl: './todo-item.component.html',
  styleUrls: ['./todo-item.component.css']
})
export class TodoItemComponent  implements OnInit{


@Input()todo!:Todo;
@Output() sendDelete=new EventEmitter()
deleteTodo(){
 this.sendDelete.emit(this.todo.id);}

 

 colorClasses=["text-bg-primary", "text-bg-secondary", "text-bg-success", "text-bg-danger", "text-bg-warning","text-bg-info" , "text-bg-light","text-bg-dark"]
 color:string="text-bg-primary";
 getRandomNumber = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;
 ngOnInit(): void {
  this.color=this.colorClasses[this.getRandomNumber(0,this.colorClasses.length)]
}
}

