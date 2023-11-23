import { Component, Input } from '@angular/core';
import { Person } from 'src/app/Model/Person';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent {
  @Input() personne!: Person;
  
}
