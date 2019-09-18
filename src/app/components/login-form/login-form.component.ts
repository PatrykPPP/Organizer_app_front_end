import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user/user';
import { Router } from '@angular/router';
import { UserAuthenticationService } from 'src/app/services/authentication/user-authentication/user-authentication.service';

@Component({
  selector: 'app-login-form',
  templateUrl: './login-form.component.html',
  styleUrls: ['./login-form.component.css']
})
export class LoginFormComponent implements OnInit {

  user = new User();
  invalidLogin = false;

  constructor(
    private router: Router,
    private userAuthenticationService: UserAuthenticationService
  ) { }

  ngOnInit() {
  }

  handleLogin() {
    this.userAuthenticationService.executeAuthentication(this.user.userName, this.user.password).subscribe(
      data => {
        this.router.navigate(['tasks']);
        this.invalidLogin = false;
      },
      error => {
        console.log(error);
        this.invalidLogin = true;
      }
    );
  }
}
