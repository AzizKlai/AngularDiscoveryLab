import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, map, of } from 'rxjs';
import { User } from 'src/app/Model/User';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
private http=inject(HttpClient)

private user$=new BehaviorSubject<User|null>(null)
logUser$=this.user$.asObservable()

urlLogin="https://apilb.tridevs.net/api/Users/login"

login(data:{email : string , password : string}){
  return this.http.post(this.urlLogin, data).pipe(
    map((response: any) => {
      const authToken = {
        token: response.id,
        ttl: response.ttl,
      };
      const user = new User(response.userId, data.email);
      localStorage.setItem('AuthToken', JSON.stringify(authToken));
      localStorage.setItem('AuthUser', JSON.stringify(user));

      this.refreshAuthState();
      return true;

    }),
    catchError((error: any) => {
      this.refreshAuthState();
      return of(false);
    })
  );

}
 
  
  
  logout(){
    const user = localStorage.getItem('AuthUser');
    if(!user){
      return false
    }
    localStorage.removeItem('AuthToken');
    localStorage.removeItem('AuthUser');
    this.refreshAuthState()
    return true
  }

  refreshAuthState(){
    const userFound = localStorage.getItem('AuthUser');
    if(!userFound){
      this.user$.next(null);
    }else{
      const user : User = JSON.parse(userFound);
      this.user$.next(new  User(user.id, user.email));
    }
  
}
}