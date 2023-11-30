import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor() {
  }
  router : Router = inject(Router);
  http: HttpClient=inject(HttpClient)
  login(formulaire : NgForm){
    //this.http.get("https://apilb.tridevs.net/api/Users/login",formulaire.value)
    this.router.navigate(['cv'])
  }
}
