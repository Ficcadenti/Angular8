import { Component, OnInit, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input('user-selected') userSelected: User;

  constructor(private service: UserService) { }

  ngOnInit(): void {
  }

  updateUser(): void {
    if (this.userSelected.id > 0) {
      this.service.updateUser(this.userSelected);
    }
  }

}
