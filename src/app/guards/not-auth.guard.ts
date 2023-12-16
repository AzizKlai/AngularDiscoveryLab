import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../cv/services/login.service';
import { map, tap } from 'rxjs';

export const notAuthGuard: CanActivateFn = (route, state) => {
  const loginService=inject(LoginService)
  const router=inject(Router)
  
  return loginService.isAuth$.pipe(
   map((isLogged) =>{if(isLogged)router.navigate(['cv']); return !isLogged})
  )
};
