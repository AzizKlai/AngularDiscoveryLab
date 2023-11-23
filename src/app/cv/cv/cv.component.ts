import { Component, OnInit } from '@angular/core';
import { Person } from 'src/app/Model/Person';

@Component({
  selector: 'app-cv',
  templateUrl: './cv.component.html',
  styleUrls: ['./cv.component.css']
})
export class CvComponent implements OnInit {
  personnes: Person[]=[];
  selectedPersonne!: Person;
  constructor(){}
  ngOnInit(): void {
    this.personnes=[
      new Person(1,"ala","ben haddoud",20,11111111,"chef"),
      new Person(2,"hammadi","bennour",25,55555555,"driver","persona-2.jpg"),
      new Person(3,"hazam","tawigar",30,88888888,"professor","persona-3.jpg"),
      new Person(4,"amor","gartawi",35,44444444,"doctor","persona-4.jpg")
    ]
    this.selectedPersonne=this.personnes[0]
  }
  selectCv(person:Person){
    this.selectedPersonne=person
  }



}
