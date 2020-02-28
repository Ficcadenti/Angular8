import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';
import { ActivatedRoute, Router } from '@angular/router';
import { from } from 'rxjs/';
import { tap, filter, map } from 'rxjs/operators';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private __userSelected: User;
  private userCopy: User;


  @Output('onSaveUser') onSaveUser = new EventEmitter<User>();

  set userSelected(userSelected) {
    this.__userSelected = userSelected;
    this.userCopy = Object.assign({}, userSelected);
  }
  get userSelected() {
    return this.__userSelected;
  }

  constructor(private service: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.userSelected = new User();
    this.route.params.subscribe((params) => {
      if (!params.id) { return; }
      //this.userSelected = this.service.getUser(+params.id); // + -> cast a number, senza chiamata al servizio
      this.service.getUserRest(+params.id).subscribe(u => this.userSelected = u); // chiamata al servizio
    });
  }

  updateUser(): void {
    if (this.userSelected.id > 0) {
      this.service.updateUserRest(this.userSelected);
    } else {
      this.service.createUserRest(this.userSelected);
    }
    this.router.navigate(['users']);
  }

  clearForm(form): void {
    if (this.userSelected.id === 0) {
      this.userSelected = new User();
    } else {
      this.userSelected = this.userCopy;
    }
  }

  closeForm(): void {
    this.router.navigate(['users']);
  }

}
