import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci-list',
  templateUrl: './fibonacci-list.component.html',
  styleUrls: ['./fibonacci-list.component.css']
})
export class FibonacciListComponent {
  list:number[]=[] 
  hide=true
  getRandomNumber = (min:number, max:number) => Math.floor(Math.random() * (max - min + 1)) + min;
  show(){
    if(this.hide){
      this.hide=!this.hide
      for (let i = 0; i < 100; i++) {
        this.list.push(this.getRandomNumber(20,30))
           }    
    } 
    else{
    this.list=[]
     this.hide=!this.hide
    }
  }
    

}
