import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../cv/services/login.service';
import { map, tap } from 'rxjs';

export const notAuthGuard: CanActivateFn = (route, state) => {
  const loginService=inject(LoginService)
  const router=inject(Router)
  
  return loginService.isAuth$.pipe(
    tap((isLogged) => {
      if (isLogged){ 
        router.navigate(['cv'])}}
    ),
   map((isLogged) => !isLogged)
  )
};
