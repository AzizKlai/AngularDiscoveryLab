import { Injectable, inject } from '@angular/core';
import {
  HttpRequest,
  HttpHandler,
  HttpEvent,
  HttpInterceptor,
  HttpHeaders
} from '@angular/common/http';
import { Observable } from 'rxjs';
import { LoginService } from '../cv/services/login.service';

@Injectable()
export class AuthentificationInterceptor implements HttpInterceptor {

  loginService=inject(LoginService)

  intercept(request: HttpRequest<unknown>, next: HttpHandler): Observable<HttpEvent<unknown>> {
    console.log("intercept");
    const authToken = this.loginService.getAuthToken();

    if (authToken) {
      request = request.clone({
        setParams: {
          'access_token': authToken
        }
      });
    }

    return next.handle(request);
  }
}
