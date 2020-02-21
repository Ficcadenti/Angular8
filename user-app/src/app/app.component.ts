import { Component, ViewChild } from '@angular/core';
import { User } from './classes/User';
import { SelectorMatcher } from '@angular/compiler';
import { UsersComponent } from './users/users.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'user-app';
  userSelected: User = new User();
  showForm = false;
  @ViewChild(UsersComponent) listaUtenti: UsersComponent;

  updateUser(user: User): void {
    this.userSelected = user;
    this.showForm = true;
  }

  onSaveUser(user: User): void {
    this.showForm = false;
  }

  newUser(): void {
    this.userSelected = new User();
    this.showForm = true;
  }

  onSearchUser(s: string): void {
    alert("Chiamo lista utenti con s:" + s);
    this.listaUtenti.test(s);
  }
}
