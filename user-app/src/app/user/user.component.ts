import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';


@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('user-data') user: User;
  @Output('onDeleteUser') onDeleteUser = new EventEmitter();
  @Output('onSelectUser') onSelectUser = new EventEmitter();
  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  deleteUser(): void {
    //this.service.deleteUser(this.user);
    this.onDeleteUser.emit(this.user);
  }

  editUser(): void {
    this.onSelectUser.emit(this.user);
  }
}
