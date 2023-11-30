import { Component, Input, inject } from '@angular/core';
import { Person } from 'src/app/Model/Person';
import { EmbaucheService } from '../services/embauche.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detail-cv',
  templateUrl: './detail-cv.component.html',
  styleUrls: ['./detail-cv.component.css']
})
export class DetailCvComponent {
  @Input() personne!: Person;
  router:Router=inject(Router)
  constructor(private embaucheService:EmbaucheService){}
  embaucher(){
    this.embaucheService.embaucherPersonne(this.personne)
  }
  getMoreInfo(){
   this.router.navigate(['cv/detail',this.personne.id])
  }
}
