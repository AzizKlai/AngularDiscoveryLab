import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Model/Person';
import { CvService } from '../services/cv.service';
import { BehaviorSubject, Observable, Subscription, catchError, filter, forkJoin, map, merge, of, share, switchMap, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes$! : Observable<Person[]>
  sharedPersonnes$!:Observable<Person[]>
  personnes:Person[]=[]
  filteredPersonnes:Person[]=[]
  
  selectedPerson$!:Observable<Person|null>;
 // subscription:Subscription;
  constructor(private cvService:CvService){
    
  }

  ngOnInit(): void {
    //operator share
    this.sharedPersonnes$=this.cvService.getHttpPersonnes$().pipe(share());
    this.personnes$=this.cvService.getHttpPersonnes$()
    /*.pipe(tap((table)=>{this.personnes=table, this.changeTab(true)}) );*/
      this.changeTab(true)
    this.selectedPerson$ = this.cvService.getSelectedPersonObservable$()
    
    //this.filteredPersonnes$=this.cvService.getSelectedPersonObservable$().pipe(filter((e)=>{e?.age>40}))
    //this.personnes=this.cvService.getPersonnes(); 
    //this.selectedPersonne=this.personnes[0]
  }

  changeTab(bool: boolean) {
   // this.cvService.changeSelectedPerson(null)
   if(bool)
   this.sharedPersonnes$.pipe(map((personnes)=> this.personnes.filter(person => person.age < 40)))
  else 
  this.sharedPersonnes$.pipe(map((personnes)=> this.personnes.filter(person => person.age >= 40)))
  
    if(bool)
    this.filteredPersonnes= this.personnes.filter(person => person.age < 40);
  else this.filteredPersonnes=this.personnes.filter(person => person.age >= 40);
    
    
    
    /*this.personnes$.pipe(
      switchMap(personnes => {
        if (bool) {
          return of(personnes.filter(person => person.age > 40));
        } else {
          return of(personnes.filter(person => person.age <= 40));
        }
      })
    );*/
    /*this.personnes$ = this.cvService.getHttpPersonnes$().pipe(
      map(persons => {
        if (bool) {
          // Filter persons over the age of 40
          return persons.filter(person => person?.age && person.age > 40);
        } else {
          // Filter persons under the age of 40
          return persons.filter(person => person?.age && person.age <= 40);
        }
      })
    );
  }*/
  }
 
  


}
