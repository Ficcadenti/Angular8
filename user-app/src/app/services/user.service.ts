import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/UserInterface';
import { BehaviorSubject, Observable, of, from } from 'rxjs/';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { User } from '../classes/User';
const APIURL = 'http://localhost:8080/UserAppRest/api/v1/user';

@Injectable()
export class UserService {
    private users = new Array<UserInterface>();
    /* [
        {
            id: 1,
            nome: 'Raffaele1',
            cognome: 'Ficcadenti1',
            cf: 'XXXXXX',
            mail: 'raffaele.ficcadenti@gmail.com',
            telefono: 'XXX-XXXXXXX',
            provincia: 'Roma',
            eta: 43,
            www: 'http://www.raffaeleficcadenti.it/'
        },
        {
            id: 2,
            nome: 'Raffaele2',
            cognome: 'Ficcadenti2',
            cf: 'XXXXXX',
            mail: 'raffaele.ficcadenti@gmail.com',
            telefono: 'XXX-XXXXXXX',
            provincia: 'Roma',
            eta: 43,
            www: 'http://www.raffaeleficcadenti.it/'
        },
        {
            id: 3,
            nome: 'Raffaele3',
            cognome: 'Ficcadenti3',
            cf: 'XXXXXX',
            mail: 'raffaele.ficcadenti@gmail.com',
            telefono: 'XXX-XXXXXXX',
            provincia: 'Roma',
            eta: 43,
            www: 'http://www.raffaeleficcadenti.it/'
        }
    ];*/

    private usernameSearch = new BehaviorSubject<string>('');
    username = this.usernameSearch.asObservable()

    constructor(private http: HttpClient) {

    }

    changeUsernameSearch(username: string) {
        this.usernameSearch.next(username);
    }

    getUsers(): Array<UserInterface> {
        return this.users;
    }

    setUsers(u: Array<UserInterface>): void {
        this.users = u;
    }

    getUsersRest(): Observable<User[]> {
        return this.http.get<UserInterface[]>(APIURL).pipe(
            catchError(this.handleError<UserInterface[]>(APIURL, [])));
    }


    getUser(id: number) {
        if (this.users != undefined) {
            return this.users.find(user => user.id === id);
        }
        else {
            return new User();
        }
    }

    getUserRest(id: number) {
        return this.http.get<UserInterface>(APIURL + '/' + id).pipe(
            catchError(this.handleError<UserInterface>(APIURL + '/' + id)));
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

    private handleError<T>(operation = 'operation', result?: T) {
        return (error: any): Observable<T> => {

            // TODO: send the error to remote logging infrastructure
            console.error(error); // log to console instead

            // TODO: better job of transforming error for user consumption
            console.log(`${operation} failed: ${error.message}`);

            // Let the app keep running by returning an empty result.
            return of(result as T);
        };
    }
}