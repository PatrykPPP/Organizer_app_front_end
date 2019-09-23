import { HttpInterceptor, HttpRequest, HttpHandler } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { UserAuthenticationService } from '../../authentication/user-authentication/user-authentication.service';

@Injectable({
  providedIn: 'root'
})
export class HttpInterceptorService implements HttpInterceptor {

  constructor(
    private userAuthenticationService: UserAuthenticationService
  ) { }

  intercept(request: HttpRequest<any>, next: HttpHandler) {

    const authHeaderString = this.userAuthenticationService.getAuthenticatedToken();

    const username = this.userAuthenticationService.getAuthenticatedUser();

    if (authHeaderString && username) {
      request = request.clone({
        setHeaders: {
          Authorization: authHeaderString
        }
      });
    }

    return next.handle(request);

  }
}
