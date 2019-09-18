import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthenticationService } from '../../authentication/user-authentication/user-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private userAuthentication: UserAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    const username = 'Peter';
    const password = '123';
    const authHeaderString = 'Basic ' + window.btoa(username + ':' + password);

    request = request.clone({
      setHeaders: {
        Authorization: authHeaderString
      }
    });

    return next.handle(request);

  }
}
