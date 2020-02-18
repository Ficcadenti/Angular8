import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  @Output() onNewUser = new EventEmitter();
  showMenu: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  newUser(): void {
    this.onNewUser.emit();
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

}
