import { Component, EventEmitter, Input, Output, inject } from '@angular/core';
import { Person } from 'src/app/Model/Person';
import { CvService } from '../services/cv.service';

@Component({
  selector: 'app-item-cv',
  templateUrl: './item-cv.component.html',
  styleUrls: ['./item-cv.component.css']
})
export class ItemCvComponent {
  @Input() personne!: Person;
  @Input()size:string="50px";


  cvService:CvService=inject(CvService)
  selectCv(){
    this.cvService.changeSelectedPerson(this.personne) }

}
