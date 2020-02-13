import { EventEmitter, Component, OnInit, Input, Output } from '@angular/core';
import { UserService } from '../users/user.service';


@Component({
  selector: 'tr[app-user]',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  @Input('user-data') user: any;
  @Output('onDeleteUser') userDeleted = new EventEmitter();
  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  deleteUser(): void {
    //this.service.deleteUser(this.user);
    this.userDeleted.emit(this.user);
  }
}
