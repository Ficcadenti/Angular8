import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/UserInterface';

@Injectable()
export class UserService {
    users: Array<UserInterface> = [
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
    constructor() {

    }
    getUsers(): Array<UserInterface> {
        return this.users;
    }
    getUser(id: number) {
        return this.users[id];
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

        this.users.splice(0, 0, user);

    }
}