import { Injectable, inject } from '@angular/core';
import { Person } from '../../Model/Person';
import { HttpClient, HttpParams } from '@angular/common/http';
import { BehaviorSubject, Observable, catchError, map, of, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';


@Injectable({
  providedIn: 'root'
})
export class CvService {
  private personnes: Person[]=[];

  private selectedPerson$:BehaviorSubject<Person|null>=new BehaviorSubject<Person|null>(null );
  notYetselected=true;
  constructor(
    private toastr:ToastrService,
    private http:HttpClient) { 
    this.personnes=[
      new Person(1,"ala","ben haddoud",20,11111111,"chef"),
      new Person(2,"hammadi","bennour",25,55555555,"driver","persona-2.jpg"),
      new Person(3,"hazam","tawigar",30,88888888,"professor","persona-3.jpg"),
      new Person(4,"amor","gartawi",35,44444444,"doctor","persona-4.jpg")
    ]
  }

    getHttpPersonnes$(): Observable<Person[]>{
      return this.http.get<Person[]>('https://apilb.tridevs.net/api/personnes').pipe(
        map((value)=>{
          this.personnes=value;
          return value;
        }),
        catchError(()=>{
          this.toastr.error("error getting data from the api")
          return of(this.getFakeCvs());
        })
      )
    }    

    deleteHttpPersonne(id : number){
      console.log("done")
     this.http.delete(`https://apilb.tridevs.net/api/personnes/${id}`).subscribe(
      (v)=>{console.log(v)},
      (error)=>{console.log(error)}
      )/*.pipe(
      tap((v)=>{
        this.toastr.success("person deletd")
        console.log("done")
    }),
      catchError((e)=>{
        this.toastr.error(`error while deleting ${e}`)
        console.log("notdone")
        return of(null)
      })
     );*/
    }

    getPersonnes():Person[]{
      return this.personnes;
    }

    getPersonneById(id: number): Observable<Person | null> {
      const personne= this.personnes.find(personne=>{ 
        return personne.id==id;
      });
      if(personne != undefined)
        return of(personne)
      else 
        return of(null)
    }
    getPersonneByName(name: string): Observable<Person[]> {
      if(name.length > 0){
        const params = new HttpParams().set('filter', JSON.stringify({where:{name:{like:`%${name}%`}}}));
        return this.http.get<Person[]>("https://apilb.tridevs.net/api/personnes/", { params });
      }else{
        return of([])
      }
      
    }


    deletePersonne(personne:Person){
      let index = this.personnes.indexOf(personne);
      if(index>=0)
      this.personnes.splice(index, 1);
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
  


}
