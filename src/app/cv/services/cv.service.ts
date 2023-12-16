import { Injectable, inject } from '@angular/core';
import { Person } from '../../Model/Person';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class CvService {
  personnesUrl=environment.apiUrl.personnesUrl

  private personnes: Person[]=[];
  private fakePersonnes:Person[]=[];

  private selectedPerson$:BehaviorSubject<Person|null>=new BehaviorSubject<Person|null>(null );
  notYetselected=true;
  constructor(
    private http:HttpClient) {
      console.log("cvservice contructed here");
       
    this.fakePersonnes=[
      new Person(1,"ala","ben haddoud",20,11111111,"chef"),
      new Person(2,"hammadi","bennour",25,55555555,"driver","persona-2.jpg"),
      new Person(3,"hazam","tawigar",30,88888888,"professor","persona-3.jpg"),
      new Person(4,"amor","gartawi",35,44444444,"doctor","persona-4.jpg")
    ]
  }

      getHttpPersonnes$(): Observable<Person[]>{
      return this.http.get<Person[]>(this.personnesUrl).pipe(
        map((value)=>{
          this.personnes=[...this.fakePersonnes,...value]
          return this.personnes;
        }),
        catchError(()=>{
          return of(this.getFakeCvs());
        })
      )
    }    

    deleteHttpPersonne$(id : number){
      console.log("delete")
    return  this.http.delete(`${this.personnesUrl}/${id}`)
    }

    getPersonnes():Person[]{
      return this.personnes;
    }

    getPersonneById$(id: number): Observable<Person | null> {
      //1st step search in local personnes
      const personne1= this.personnes.find(personne=>{ 
        return personne.id==id;
      });
      if(personne1 != undefined)
        return of(personne1)
      else {
      //search with http request
        const personne2 = this.getHttpPersonnes$().pipe(
          map((personnes)=>{
            const pers= personnes.find(person=>person.id==id)
            if(pers!=undefined) return pers
            else return null
            }))
        return personne2}
    }
    getPersonneByName$(name: string): Observable<Person[]> {
      if(name.length > 0){
        const params = new HttpParams().set('filter', JSON.stringify(
          {where: 
            {name:{like:`%${name}%`}}
                  }));
        return this.http.get<Person[]>(`${this.personnesUrl}/`, { params });
      }else{  
        return of([])
      }
      
    }


    deletePersonne(personne:Person){
      let index = this.fakePersonnes.indexOf(personne);
      if(index>=0)
      this.fakePersonnes.splice(index, 1);
    }
    getFakeCvs():Person[]{
     this.personnes=[
      new Person(1,"ala","ben haddoud",20,11111111,"chef"),
      new Person(2,"hammadi","bennour",25,55555555,"driver","persona-2.jpg"),
      new Person(3,"hazam","tawigar",41,88888888,"professor","persona-3.jpg"),
      new Person(4,"amor","gartawi",45,44444444,"doctor","persona-4.jpg")
    ]
      return this.personnes
    }

    getSelectedPersonObservable$() : Observable<Person | null>{
      return this.selectedPerson$.asObservable()
    }
    changeSelectedPerson(person : Person|null){
      this.selectedPerson$.next(person)    
    }



    //add person
    addHttpPerson$(person:Person) {
      return this.http.post<Person>(
        this.personnesUrl,  //?access_token=${localStorage.getItem('id',)}
        { name: person.name,
          firstname: person.firstname,
          cin: person.cin,
          job: person.job,
          path: person.path,
          age: person.age,
        },
      );
    }
    addPerson(person:Person){
      person.id=this.fakePersonnes[this.fakePersonnes.length-1].id+1
      this.fakePersonnes.push(person)
    }
  
  //save form state
  addFormValues:any
  getFormState(){return this.addFormValues}
  saveFormState(data:any){this.addFormValues=data}

}
