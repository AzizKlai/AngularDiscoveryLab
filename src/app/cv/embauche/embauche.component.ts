import { Component } from '@angular/core';
import { Person } from 'src/app/Model/Person';
import { EmbaucheService } from '../services/embauche.service';

@Component({
  selector: 'app-embauche',
  templateUrl: './embauche.component.html',
  styleUrls: ['./embauche.component.css']
})
export class EmbaucheComponent {
  personnes!: Person[];
  constructor(private embaucheService:EmbaucheService){}
  ngOnInit(): void {
    this.personnes=this.embaucheService.getPersonnes(); 
  }
  debaucher(person:Person){
   this.embaucheService.debaucherPersonne(person);
  }
 
  

}
