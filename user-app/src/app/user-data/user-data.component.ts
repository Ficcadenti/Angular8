import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute } from '@angular/router';
import { User } from '../classes/User';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
  private userSelected: User;
  private userCopy: User;

  constructor(private service: UserService, private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.userSelected = new User();

    this.route.params.subscribe((p) => {
      if (!p.id) { return; }
      this.userSelected = this.service.getUser(+p.id); // + -> cast a number
    });
  }

}
