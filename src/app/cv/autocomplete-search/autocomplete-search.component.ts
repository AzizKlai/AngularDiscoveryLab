import { Component, OnInit, inject } from '@angular/core';
import { CvService } from '../services/cv.service';
import { Router } from '@angular/router';
import { FormControl } from '@angular/forms';
import { Observable, debounceTime, distinctUntilChanged, switchMap } from 'rxjs';
import { Person } from 'src/app/Model/Person';

@Component({
  selector: 'app-autocomplete-search',
  templateUrl: './autocomplete-search.component.html',
  styleUrls: ['./autocomplete-search.component.css']
})
export class AutocompleteSearchComponent implements OnInit {
  cvService=inject(CvService)
  router=inject(Router)
  name =new FormControl()
  isInputSelected=false;
  isOut=false;
  searchedPersons$:Observable<Person[]>=new Observable()

  ngOnInit(): void {
  this.searchedPersons$=this.name.valueChanges.pipe(
    debounceTime(300),
    distinctUntilChanged(),
    switchMap((name)=> this.cvService.getPersonneByName$(name))
  )

  }
  
  selectResult(result:any){}
  onBlur(){this.isInputSelected=false;}
  onFocus(){this.isInputSelected=true;this.isOut=false;}
  onLeave(){this.isOut=true; }
  

}
