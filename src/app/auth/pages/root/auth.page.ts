import { Component, OnInit } from '@angular/core';
import { User } from '../../../models/index';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.page.html',
  styleUrls: ['auth.page.scss'],
})
export class AuthPage implements OnInit {
  constructor() {}

  loginSection: boolean;
  forgotSection: boolean;
  signUpSection: boolean = true;
  rootSection: boolean;

  ngOnInit() {}

  changeSection(key: string) {
    switch (key) {
      case 'loginSection':
        this.loginSection = true;
        this.signUpSection = false;
        this.rootSection = false;
        this.forgotSection = false;
        break;
      case 'signUpSection':
        this.signUpSection = true;
        this.loginSection = false;
        this.rootSection = false;
        this.forgotSection = false;
        break;
      case 'rootSection':
        this.rootSection = true;
        this.loginSection = false;
        this.signUpSection = false;
        this.forgotSection = false;
        break;
      case 'forgotSection':
        this.forgotSection = true;
        this.loginSection = false;
        this.signUpSection = false;
        this.rootSection = false;
        break;
      default:
        this.rootSection = true;
        this.loginSection = false;
        this.signUpSection = false;
        this.forgotSection = false;
        break;
    }
  }
}
