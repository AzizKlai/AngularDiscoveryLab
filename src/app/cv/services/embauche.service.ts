import { Injectable, inject } from '@angular/core';
import { Person } from '../../Model/Person';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root'
})
export class EmbaucheService {
  private personnes : Person[] = [];
  constructor() { }
  private toastr = inject(ToastrService);
  
  getPersonnes() : Person[] {
    return this.personnes;
  }
  embaucherPersonne(item : Person) {
    let index = this.personnes.indexOf(item);
    if(index == -1)
    {   this.toastr.success(`${item.name} ${item.firstname} embauche`)
        this.personnes.push(item);}
    else
      this.toastr.error(`this person ${item.name} ${item.firstname} is already embauched`)
  }
  debaucherPersonne(item: Person){
    let index = this.personnes.indexOf(item);
    this.personnes.splice(index,1);
  }
}
