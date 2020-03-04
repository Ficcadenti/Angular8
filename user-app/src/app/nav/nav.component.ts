import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  //@Output('onNewUser') onNewUser = new EventEmitter<string>();
  //@Output('onSearchUser') onSearchUser = new EventEmitter();
  showMenu: boolean = false;
  private __isUserLoggedIn: boolean = false;

  constructor(private service: UserService, private router: Router, private auth: AuthService) {
  }

  set isUserLoggedIn(isUserLoggedIn) {
    this.__isUserLoggedIn = isUserLoggedIn;
  }
  get isUserLoggedIn() {
    return this.__isUserLoggedIn;
  }

  ngOnInit() {
    this.isUserLoggedIn = this.auth.isUserLoggedIn();
  }

  newUser(): void {
    //this.onNewUser.emit();
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  onKey(event: any): void {
    const s: string = event.target.value
    this.service.changeUsernameSearch(s);
  }

  logout(e: Event): void {
    e.preventDefault();
    this.auth.logout();
    this.router.navigate(['login']);
  }

}
