import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';
import { LoginService } from '../services/login.service';
import { Observable, tap } from 'rxjs';
import { User } from 'src/app/Model/User';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  constructor(
    private toastr: ToastrService,
    private loginService : LoginService,
    private router : Router,

  ){
  }

  login(loginFormulaire: NgForm) {
    this.loginService.login(loginFormulaire.form.value).pipe(
      tap((authenticated)=>{
        if(authenticated){
          this.router.navigate(['cv']);
        }else{
          this.toastr.error("Erreur d'authentification")
        }
      })
    ).subscribe()
  }

  ngOnInit(): void {
   /* const person = localStorage.getItem("AuthUser")
    if (person){
      this.router.navigate([''])
    }*/
  }
}
