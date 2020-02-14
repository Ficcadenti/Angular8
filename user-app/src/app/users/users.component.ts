import { EventEmitter, Output, Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../interfaces/User';

@Component(
    {
        selector: 'app-users',
        templateUrl: './users.component.html',
        styleUrls: ['./users.component.css']

    }
)

export class UsersComponent implements OnInit {
    @Output('updateUser') updateUser = new EventEmitter<User>();
    title: string = 'Users';
    users: Array<User>;

    constructor(private service: UserService) { }

    ngOnInit(): void {
        this.users = this.service.getUsers();
    }

    onDeleteUser(user: User): void {
        this.service.deleteUser(user);
    }

    onSelectUser(user: User): void {
        this.updateUser.emit(user);
    }
}