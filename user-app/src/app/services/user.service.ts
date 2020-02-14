import { Injectable } from '@angular/core';
import { User } from '../interfaces/User';

@Injectable()
export class UserService {
    users: Array<User> = [
        {
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
    constructor() {

    }
    getUsers(): Array<User> {
        return this.users;
    }

    deleteUser(user: User): void {
        let idx = this.users.indexOf(user);
        if (idx >= 0) {
            this.users.splice(idx, 1);
        }
    }
}