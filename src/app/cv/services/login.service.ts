import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { BehaviorSubject, catchError, map, of } from 'rxjs';
import { User } from 'src/app/Model/User';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
private http=inject(HttpClient)

private user$=new BehaviorSubject<User|null>(null)
private isAuthenticated$=new BehaviorSubject<boolean>(false)

constructor(){
  this.refreshAuthState()
}

logUser$=this.user$.asObservable()
isAuth$=this.isAuthenticated$.asObservable()

urlLogin=environment.apiUrl.loginUrl

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
      this.isAuthenticated$.next(false);
    }else{
      const user : User = JSON.parse(userFound);
      this.user$.next(new  User(user.id, user.email));
      this.isAuthenticated$.next(true);

    }
  
}


getAuthToken(): string | null {
  const authToken = localStorage.getItem('AuthToken');
  return authToken ? JSON.parse(authToken).token : null;
}
}