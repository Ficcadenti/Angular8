import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    users = [
        {
            nome: 'Raffaele',
            cognome: 'Ficcadenti',
            cf: 'XXXXXX',
            mail: 'raffaele.ficcadenti@gmail.com',
            telefono: 'XXX-XXXXXXX',
            provincia: 'Roma',
            eta: 43
        },
        {
            nome: 'Raffaele1',
            cognome: 'Ficcadenti',
            cf: 'XXXXXX',
            mail: 'raffaele.ficcadenti@gmail.com',
            telefono: 'XXX-XXXXXXX',
            provincia: 'Roma',
            eta: 43
        },
        {
            nome: 'Raffaele2',
            cognome: 'Ficcadenti',
            cf: 'XXXXXX',
            mail: 'raffaele.ficcadenti@gmail.com',
            telefono: 'XXX-XXXXXXX',
            provincia: 'Roma',
            eta: 43
        }
    ];
    constructor() {

    }
    getUsers(): Array<{}> {
        return this.users;
    }

    deleteUser(user): void {
        let idx = this.users.indexOf(user);
        if (idx >= 0) {
            this.users.splice(idx, 1);
        }
    }
}