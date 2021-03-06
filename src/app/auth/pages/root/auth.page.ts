import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.page.html',
  styleUrls: ['auth.page.scss'],
})
export class AuthPage implements OnInit {
  constructor() {}

  loginSection: boolean;
  signUpSection: boolean;
  rootSection: boolean = true;

  ngOnInit() {}

  changeSection(key: string) {
    switch (key) {
      case 'loginSection':
        this.loginSection = true;
        this.signUpSection = false;
        this.rootSection = false;
        break;
      case 'signUpSection':
        this.loginSection = false;
        this.signUpSection = true;
        this.rootSection = false;
        break;
      case 'rootSection':
        this.loginSection = false;
        this.signUpSection = false;
        this.rootSection = true;
        break;

      default:
        break;
    }
  }
}
