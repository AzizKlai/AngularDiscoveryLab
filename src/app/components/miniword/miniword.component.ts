import { Component } from '@angular/core';

@Component({
  selector: 'app-miniword',
  templateUrl: './miniword.component.html',
  styleUrls: ['./miniword.component.css']
})
export class MiniwordComponent {
  size:number=20;
  font:String="Arial";
  color:String="black";
  fonts=[ 'Courier New','Arial','Lucida Sans','Times New Roman'];


}
