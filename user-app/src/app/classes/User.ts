import { UserInterface } from '../interfaces/UserInterface';

export class User implements UserInterface {
    id: number;
    nome: string;
    cognome: string;
    cf: string;
    mail: string;
    telefono: string;
    provincia: string;
    eta: number;
    www: string;

    constructor() {
        this.id = -1;
        this.nome = '';
        this.cognome = '';
        this.cf = '';
        this.mail = '';
        this.telefono = '';
        this.provincia = '';
        this.eta = 18;
        this.www = '';
    }

}
