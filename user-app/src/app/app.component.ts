import { Component } from '@angular/core';
import { User } from './interfaces/User';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'user-app';
  userSelected: User;

  updateUser(user: User): void {
    this.userSelected = user;
  }
}
