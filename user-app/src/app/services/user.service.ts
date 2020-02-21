import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/UserInterface';
import { BehaviorSubject } from 'rxjs/';

@Injectable()
export class UserService {
    private users: Array<UserInterface> = [
        {
            id: 1,
            nome: 'Raffaele',
            cognome: 'Ficcadenti',
            cf: 'XXXXXX',
            mail: 'raffaele.ficcadenti@gmail.com',
            telefono: 'XXX-XXXXXXX',
            provincia: 'Roma',
            eta: 43,
            www: 'http://www.raffaeleficcadenti.it/'
        },
        {
            id: 2,
            nome: 'Raffaele1',
            cognome: 'Ficcadenti',
            cf: 'XXXXXX',
            mail: 'raffaele.ficcadenti@gmail.com',
            telefono: 'XXX-XXXXXXX',
            provincia: 'Roma',
            eta: 43,
            www: 'http://www.raffaeleficcadenti.it/'
        },
        {
            id: 3,
            nome: 'Raffaele2',
            cognome: 'Ficcadenti',
            cf: 'XXXXXX',
            mail: 'raffaele.ficcadenti@gmail.com',
            telefono: 'XXX-XXXXXXX',
            provincia: 'Roma',
            eta: 43,
            www: 'http://www.raffaeleficcadenti.it/'
        }
    ];

    private usernameSearch = new BehaviorSubject<string>('');
    username = this.usernameSearch.asObservable()

    constructor() {

    }

    changeUsernameSearch(username: string) {
        this.usernameSearch.next(username);
    }

    getUsers(): Array<UserInterface> {
        return this.users;
    }
    getUser(id: number) {
        return this.users.find(user => user.id = id);
    }

    deleteUser(user: UserInterface): void {
        let idx = this.users.indexOf(user);
        if (idx >= 0) {
            this.users.splice(idx, 1);
        }
    }

    updateUser(user: UserInterface) {
        const idx = this.users.findIndex((v) => v.id === user.id);
        if (idx != -1) {
            this.users[idx] = user;
        }
    }

    createUser(user: UserInterface) {
        user.id = this.users.length + 1;
        this.users.splice(0, 0, user);

    }
}