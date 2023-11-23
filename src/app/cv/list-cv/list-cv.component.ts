import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from 'src/app/Model/Person';

@Component({
  selector: 'app-list-cv',
  templateUrl: './list-cv.component.html',
  styleUrls: ['./list-cv.component.css']
})
export class ListCvComponent {
  @Input()personnes: Person[]=[];
  @Output() selectedCv= new EventEmitter()
  constructor(){}

  selectCv(selectedPersonne:Person){
    this.selectedCv.emit(
       selectedPersonne
    )

  }

}
