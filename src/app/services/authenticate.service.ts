import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLoggedIn: boolean = false;

  constructor() { }

  loginUser(username:string) {
    this.isUserLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', username);
  }

  logoutUser() {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }

  isUserAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}