import { Component, OnInit } from '@angular/core';
import { LoadingController } from '@ionic/angular';
import { User } from '../../../models/index';

@Component({
  selector: 'app-auth',
  templateUrl: 'auth.page.html',
  styleUrls: ['auth.page.scss'],
})
export class AuthPage implements OnInit {
  constructor(private loadingSpinner: LoadingController) {}

  loginSection: boolean;
  forgotSection: boolean;
  signUpSection: boolean;
  rootSection: boolean = true;

  user: User = {
    id: null,
    username: null,
    name: null,
    lastName: null,
    email: null,
  };

  signUpFields = {
    password: null,
    repeatedPassword: null,
  };
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

  async signUp() {
    const loading = await this.loadingSpinner.create();
    loading.present();
    if (this.user.email) {
      console.log(this.user);
    }
  }
}
