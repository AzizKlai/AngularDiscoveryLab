import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { User } from 'src/app/Model/User';
import { LoginService } from 'src/app/cv/services/login.service';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent {
  logstate="login"
  user$: Observable<User|null>;
  
  constructor(private loginService:LoginService){
    this.user$=this.loginService.logUser$
  }
  logout(){
    this.loginService.logout()
  }
}
