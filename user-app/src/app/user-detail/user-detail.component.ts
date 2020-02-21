import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  private __userSelected: User;
  private userCopy: User;


  @Output('onSaveUser') onSaveUser = new EventEmitter<User>();

  @Input('user-selected') set userSelected(userSelected) {
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
      this.userSelected = this.service.getUser(+params.id); // + -> cast a number
    });
  }

  updateUser(): void {
    if (this.userSelected.id > 0) {
      this.service.updateUser(this.userSelected);
      //this.onSaveUser.emit(this.userSelected);
    } else {
      this.service.createUser(this.userSelected);
      //this.onSaveUser.emit(this.userSelected);
    }
    this.router.navigate(['users']);
  }

  clearForm(form): void {
    if (this.__userSelected.id === 0) {
      this.__userSelected = new User();
    } else {
      this.__userSelected = this.userCopy;
    }
  }

  closeForm(): void {
    this.router.navigate(['users']);
  }

}
