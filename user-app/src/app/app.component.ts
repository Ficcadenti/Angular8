import { Component } from '@angular/core';
import { User } from './classes/User';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title: string = 'user-app';
  userSelected: User = new User();
  showForm = false;

  updateUser(user: User): void {
    this.userSelected = user;
    this.showForm = true;
  }
}
