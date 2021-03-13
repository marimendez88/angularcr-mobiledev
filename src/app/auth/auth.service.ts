import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({ providedIn: 'root' })
export class AuthService {
  constructor() {}

  isLoggedIn() {
    // this.user = JSON.parse(localStorage.getItem('user')) as firebase.User;
    // return this.user !== null;
  }

  public getToken() {
    // return from(this.user.getIdToken());
  }

  signUp(email: string, password: string) {
    // return from(this.afAuth
    //   .auth
    //   .createUserWithEmailAndPassword(email, password)
    //   .then(result => {
    //     this.afAuth.auth.currentUser.sendEmailVerification();
    //     return {
    //       error: false,
    //       details: result
    //     };
    //   })
    //   .catch(error => {
    //     return {
    //       error: true,
    //       details: error
    //     };
    //   }));
  }

  forgotPassword(email: string) {
    // return from(this.afAuth
    //   .auth.sendPasswordResetEmail(email)
    //   .then(result => {
    //     return {
    //       error: false,
    //       details: result
    //     };
    //   })
    //   .catch(error => {
    //     return {
    //       error: true,
    //       details: error
    //     };
    //   }));
  }

  login(email, password: string) {
    // this.requestAndSetUserInfo(email);
    // return from(this.afAuth
    //   .auth
    //   .signInWithEmailAndPassword(email, password)
    //   .then(result => {
    //     return {
    //       error: false,
    //       details: result
    //     };
    //   })
    //   .catch(error => {
    //     return {
    //       error: true,
    //       details: error
    //     };
    //   }));
  }

  logout() {
    //   localStorage.clear();
    //   return from(this.afAuth
    //     .auth
    //     .signOut());
  }
}
