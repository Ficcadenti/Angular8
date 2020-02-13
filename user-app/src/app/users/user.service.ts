import { Injectable } from '@angular/core';

@Injectable()
export class UserService {
    constructor() {

    }
    getUsers(): Array<{}> {
        let users = [
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
        return users;
    }
}