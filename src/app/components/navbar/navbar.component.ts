import { Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { User } from 'src/app/Model/User';
import { LoginService } from 'src/app/cv/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  router=inject(Router)
  logstate="login"
  user$: Observable<User|null>;
  isAuthenticated: Observable<boolean>;
  
  constructor(private loginService:LoginService){
    this.user$=this.loginService.logUser$
    this.isAuthenticated=loginService.isAuth$
  }
  logout(){
    this.loginService.logout()
    this.router.navigate(['login'])
  }
}
