import { EventEmitter, Output, Component, OnInit } from '@angular/core';
import { UserService } from '../services/user.service';
import { User } from '../classes/User';
import { from } from 'rxjs/';
import { tap, filter, map } from 'rxjs/operators';

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
        //this.users = this.service.getUsers();
        this.getUserRest();
        this.service.username.subscribe(result => {
            this.search(result);
        });
    }

    getUserRest(): void {
        this.service.getUsersRest()
            .pipe(map(u => this.users = u))
            .subscribe(u => {
                this.service.setUsers(this.users);
            });
    }

    onDeleteUser(user: User): void {
        this.service.deleteUser(user);
        this.users = new Array<User>();
        const o = from(this.service.getUsers()).pipe(
            filter((u: User) => u.id > 0),
            tap((u: User) => console.log(JSON.stringify(u)))
        );
        o.subscribe(u => this.users.push(u));

    }

    onSelectUser(user: User): void {
        const userCopy = Object.assign({}, user);
    }

    search(s: string): void {
        if (s != '') {
            this.users = new Array();

            const o = from(this.service.getUsers()).pipe(
                filter((u: User) => u.nome.toUpperCase().indexOf(s.toUpperCase()) >= 0),
                tap((u: User) => console.log(JSON.stringify(u)))
            );
            o.subscribe(u => this.users.push(u));
        } else {
            this.users = this.service.getUsers();
        }
    }
}