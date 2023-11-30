import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Person } from 'src/app/Model/Person';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent {
  @Input() showFilters!:boolean
  @Input()personnes: Person[]=[];

  @Output() changeTab=new EventEmitter()
  setJunior(bool:boolean){
  this.changeTab.emit(bool)
  }
}
