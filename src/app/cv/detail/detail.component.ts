import { Component, OnDestroy, OnInit } from '@angular/core';
import { Person } from 'src/app/Model/Person';
import { CvService } from '../services/cv.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Observable,  Subscription,  catchError, map, of, tap } from 'rxjs';
import { EmbaucheService } from '../services/embauche.service';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit{
  personne$!:Observable<Person|null>
  constructor(
    public toastr:ToastrService,
    private router:Router,
    private activatedRoute:ActivatedRoute,
    private cvService:CvService,
    private embaucheService:EmbaucheService
    ){}
    ngOnInit(): void {
      this.personne$=this.activatedRoute.data.pipe(
        map((data)=>{ const personne=data['personne'] ;
        return personne})
      ),
      catchError(()=> of(null))
    }


    deletePersonne(personne:Person){
      this.cvService.deleteHttpPersonne$(personne.id).pipe(
        tap((val)=>{ this.toastr.success(`person with id${personne.id} deleted`)}),
        catchError(()=>{this.toastr.error(`can't delete person with id${personne.id}`); return of(null)}) 
        ).subscribe()
      this.cvService.deletePersonne(personne);
      this.embaucheService.debaucherPersonne(personne);
      this.cvService.changeSelectedPerson(null)
      this.router.navigate(['cv']);
    }
  

    
    
  }
  