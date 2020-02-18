import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';
import { ActivatedRoute } from '@angular/router';

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

  constructor(private service: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.route.params.subscribe((params) => {
      this.userSelected = this.service.getUser(+params.id);
      if (this.userSelected === undefined) {
        this.userSelected = new User();
      }
    });
  }

  updateUser(): void {
    if (this.userSelected.id > 0) {
      this.service.updateUser(this.userSelected);
      this.onSaveUser.emit(this.userSelected);
    } else {
      this.service.createUser(this.userSelected);
      this.onSaveUser.emit(this.userSelected);
    }
  }

  clearForm(form): void {
    if (this.__userSelected.id === 0) {
      this.__userSelected = new User();
    } else {
      this.__userSelected = this.userCopy;
    }
  }

}
