import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Model/Person';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { tap } from 'rxjs';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  personne!:Person;
  constructor(
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private cvService:CvService,
    private embaucheService:EmbaucheService
    ){}
  ngOnInit(): void {
   
    this.activatedRoute.data.subscribe((data) => {
      if (data['personne'] == null) {
        this.router.navigate(['notfound']);  
      }
      this.personne = data['personne'];
    });   
  }

  deletePersonne(){
    this.cvService.deleteHttpPersonne(this.personne.id)
    this.cvService.deletePersonne(this.personne);
    this.embaucheService.debaucherPersonne(this.personne);
    this.router.navigate(['cv']);
  }


}
