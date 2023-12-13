import { Component, OnDestroy } from '@angular/core';
import { Observable, catchError, of } from 'rxjs';
import { Person } from 'src/app/Model/Person';
import { CvService } from '../services/cv.service';
import { ToastrService } from 'ngx-toastr';
import { Router } from '@angular/router';

@Component({
  selector: 'app-master-detail',
  templateUrl: './master-detail.component.html',
  styleUrls: ['./master-detail.component.css']
})
export class MasterDetailComponent implements OnDestroy {
  personnes$:Observable<Person[]>
  selectedPerson$!:Observable<Person|null>;
  subscription

  constructor(private cvService:CvService, toastr:ToastrService,private router: Router){
    this.personnes$=this.cvService.getHttpPersonnes$().pipe(
      catchError((response)=> {
        toastr.error("error recuparing data")
        return of(response)
        }))   

    this.subscription= cvService.getSelectedPersonObservable$().subscribe((
      (person)=>{
        if(person)
        this.router.navigate(['cv/masterDetail',person.id])
      }  
    ))
  }

  ngOnDestroy(): void {
      this.subscription.unsubscribe()
  }


}
