import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/shared/models/user/user';

@Component({
  selector: 'app-registration-form',
  templateUrl: './registration-form.component.html',
  styleUrls: ['./registration-form.component.css']
})
export class RegistrationFormComponent implements OnInit {

  user = new User();

  constructor() { }

  ngOnInit() {
  }

  handleRegistration() {

  }

}
