import { EventEmitter, Output, Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';

@Component(
    {
        selector: 'app-users',
        templateUrl: './users.component.html',
        styleUrls: ['./users.component.css']

    }
)

export class UsersComponent implements OnInit {
    @Output('updateUser') updateUser = new EventEmitter<User>();
    title: string = 'Users list';
    users: Array<User>;

    constructor(private service: UserService) { }

    ngOnInit(): void {
        this.users = this.service.getUsers();
    }

    onDeleteUser(user: User): void {
        this.service.deleteUser(user);
    }

    onSelectUser(user: User): void {
        const userCopy = Object.assign({}, user);
        this.updateUser.emit(userCopy);
    }
}