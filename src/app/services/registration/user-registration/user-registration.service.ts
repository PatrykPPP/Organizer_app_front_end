import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { User } from 'src/app/shared/models/user/user';
import { ORGANIZER_API_URL } from 'src/app/app.constants';

@Injectable({
  providedIn: 'root'
})
export class UserRegistrationService {

  constructor(
    private http: HttpClient
  ) { }

  registerUser(username: string, password: string) {

    const user = new User();
    user.password = window.btoa(password);
    user.userName = window.btoa(username);

    return this.http.post<User>(`${ORGANIZER_API_URL}/registration`, user);
  }
}
