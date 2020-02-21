import { Component, OnInit, Output, EventEmitter, Input } from '@angular/core';
import { UserService } from '../services/user.service';
import { ActivatedRoute, Router } from '@angular/router';
import { User } from '../classes/User';

@Component({
  selector: 'app-user-data',
  templateUrl: './user-data.component.html',
  styleUrls: ['./user-data.component.css']
})
export class UserDataComponent implements OnInit {
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

  public titolo: string = "User delatil";

  constructor(private service: UserService, private route: ActivatedRoute, private router: Router) { }

  ngOnInit(): void {
    this.userSelected = new User();

    this.route.params.subscribe((p) => {
      if (!p.id) { return; }
      this.userSelected = this.service.getUser(+p.id); // + -> cast a number
    });
  }

  closeForm(): void {
    this.router.navigate(['users']);
  }

}
