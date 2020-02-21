import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  //@Output('onNewUser') onNewUser = new EventEmitter<string>();
  @Output('onSearchUser') onSearchUser = new EventEmitter();
  showMenu: boolean = false;

  constructor() {
  }

  ngOnInit() {
  }

  newUser(): void {
    //this.onNewUser.emit();
  }

  toggleMenu(): void {
    this.showMenu = !this.showMenu;
  }

  onKey(event: any): void {
    const s: string = event.target.value
    if (s.length > 3) {
      alert("emetto evento:" + s);
      this.onSearchUser.emit(s);
    }
  }
}
