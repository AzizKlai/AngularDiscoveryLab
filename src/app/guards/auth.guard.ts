import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';
import { LoginService } from '../cv/services/login.service';
import { map, tap } from 'rxjs';
import { ToastrService } from 'ngx-toastr';

export const authGuard: CanActivateFn = (route, state) => {
  const loginService=inject(LoginService)
  const router=inject(Router)
  const toastr=inject(ToastrService)

  return loginService.isAuth$.pipe(
    tap((isLogged) => {
    if (!isLogged){ 
    toastr.info("you should login first")
      router.navigate(['login'])}}
  )
  )
};
