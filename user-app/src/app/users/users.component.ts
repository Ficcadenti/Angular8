import { Component } from '@angular/core';

@Component(
    {
        selector: 'app-users',
        templateUrl: './users.component.html',
        styleUrls: ['./users.component.css']

    }
)

export class UsersComponent {
    title: string = 'Users';
    users: Array<{}> = [
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
}