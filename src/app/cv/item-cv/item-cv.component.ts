import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Person } from 'src/app/Model/Person';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent {
  @Input() personne!: Person;
  @Input()size:string="50px";

  @Output() selectedCv=new EventEmitter()

  selectCv(){
   this.selectedCv.emit(
    this.personne
   )
  }

}
