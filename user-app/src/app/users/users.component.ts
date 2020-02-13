import { Component, OnInit } from '@angular/core';
import { UserService } from './user.service';

@Component(
    {
        selector: 'app-users',
        templateUrl: './users.component.html',
        styleUrls: ['./users.component.css']

    }
)

export class UsersComponent implements OnInit {

    title: string = 'Users';
    users: Array<{}>;

    constructor(private service: UserService) { }

    ngOnInit(): void {
        this.users = this.service.getUsers();
    }

    onDeleteUser(user): void {
        this.service.deleteUser(user);
    }
}