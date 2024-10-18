import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLoggedIn: boolean = false;

  constructor() { }

  loginUser() {
    this.isUserLoggedIn = true;
    localStorage.setItem('isLoggedIn', 'true');
    localStorage.setItem('username', 'admin');
  }

  logoutUser() {
    this.isUserLoggedIn = false;
    localStorage.removeItem('isLoggedIn');
  }

  isUserAuthenticated(): boolean {
    return localStorage.getItem('isLoggedIn') === 'true';
  }
}