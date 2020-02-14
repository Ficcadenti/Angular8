import { Component, OnInit, Input } from '@angular/core';
import { User } from '../interfaces/User';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
  styleUrls: ['./user-detail.component.css']
})
export class UserDetailComponent implements OnInit {
  @Input('user-selected') userSelected: User;
  constructor() { }

  ngOnInit(): void {
  }

}
