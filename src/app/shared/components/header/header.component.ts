import { Component, OnInit } from '@angular/core';
import { UserAuthenticationService } from 'src/app/services/authentication/user-authentication/user-authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent implements OnInit {

  constructor(
    private userAuthenticationService: UserAuthenticationService,
    private router: Router) { }

  ngOnInit() {
  }

  isUserLoggedIn() {
    if (this.userAuthenticationService.isUserLoggedIn()) {
      return true;
    } else {
      return false;
    }
  }

  logout() {
    this.userAuthenticationService.logout();
    this.router.navigate(['login']);
  }

}
