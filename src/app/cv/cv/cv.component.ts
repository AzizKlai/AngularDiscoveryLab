import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Model/Person';
import { CvService } from '../services/cv.service';
import { BehaviorSubject, Observable, Subscription, catchError, filter, forkJoin, map, merge, of, share, shareReplay, switchMap, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  sharedPersonnes$!:Observable<Person[]> // shared flux de donnees de personne 
  filteredPersonnes$:Observable<Person[]>=new Observable()
  
  selectedPerson$!:Observable<Person|null>;
  constructor(private cvService:CvService){
    
  }

  ngOnInit(): void {
    //operator share
    this.sharedPersonnes$=this.cvService.getHttpPersonnes$().pipe(shareReplay());
      this.changeTab(true)
    this.selectedPerson$ = this.cvService.getSelectedPersonObservable$()
    
  }

  changeTab(bool: boolean) { //change from junior to senior  filter the sharedPersonnes 
  //this.cvService.changeSelectedPerson(null)
  this.filteredPersonnes$=this.sharedPersonnes$.pipe
  (map((personnes)=> {
        if(bool)
         return personnes.filter(person => person.age < 40)
      else 
        return personnes.filter(person => person.age >= 40)
      
    }))
  
    
    
  }
 
  


}
