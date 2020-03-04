import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLogged = true;
  constructor() {

  }

  isUserLoggedIn(): boolean {
    return this.isUserLogged;
  }

  signIn(email: string, password: string): void {

  }

  signUp(username: string, email: string, password: string): void {

  }

  logout(): void {
    this.isUserLogged = false;
  }
}
