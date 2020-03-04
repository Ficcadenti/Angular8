import { Injectable } from '@angular/core';
import { UserService } from './user.service';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  private isUserLogged = true;
  constructor(private service: UserService) {

  }

  isUserLoggedIn(): boolean {
    return this.isUserLogged;
  }

  signIn(email: string, password: string): void {
    console.log('email:' + email + ',password:' + password);
    localStorage.setItem('Token', email);
    this.service.getTokenRest(email).subscribe(u => console.log('TOKEN: ' + u['token']));
  }

  signUp(username: string, email: string, password: string): void {

  }

  logout(): void {
    this.isUserLogged = false;
  }
}
