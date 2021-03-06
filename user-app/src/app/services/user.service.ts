import { Injectable } from '@angular/core';
import { UserInterface } from '../interfaces/UserInterface';
import { BehaviorSubject, Observable, of, from } from 'rxjs/';
import { catchError, map, tap } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { User } from '../classes/User';

const APIURL = 'http://localhost:8080/UserAppRest/api/v1/';

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

    httpOptions = {
        headers: new HttpHeaders({
            'Content-Type': 'application/json'
        })
    };


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
        return this.http.get<UserInterface[]>(APIURL + 'user').pipe(
            catchError(this.handleError<UserInterface[]>(APIURL + 'user', [])));
    }

    getTokenRest(userId: string): Observable<string> {
        alert("getToken()");
        return this.http.get<string>(APIURL + 'token/' + userId).pipe(
            catchError(this.handleError<string>(APIURL + 'token/' + userId)));
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
        return this.http.get<UserInterface>(APIURL + 'user/' + id).pipe(
            catchError(this.handleError<UserInterface>(APIURL + 'user/' + id)));
    }

    deleteUser(user: UserInterface): void {
        let idx = this.users.indexOf(user);
        if (idx >= 0) {
            this.users.splice(idx, 1);
        }
    }

    deleteUserRest(user: UserInterface): void {
        const obs = this.http.delete(APIURL + 'userdel/' + user.id, this.httpOptions).pipe(
            catchError(this.handleError(APIURL + 'userdel/' + user.id)));
        obs.subscribe(() => this.deleteUser(user));
    }

    updateUser(user: UserInterface) {
        const idx = this.users.findIndex((v) => v.id === user.id);
        if (idx != -1) {
            this.users[idx] = user;
        }
    }

    updateUserRest(user: User) {
        const obs = this.http.put<User>(APIURL + 'usermod', user, this.httpOptions).pipe(
            catchError(this.handleError<User>(APIURL + 'usermod')));
        obs.subscribe(() => this.updateUser(user));
    }

    createUser(user: UserInterface) {
        user.id = this.users.length + 1;
        this.users.splice(0, 0, user);
    }

    createUserRest(user: UserInterface) {
        const obs = this.http.post<User>(APIURL + 'useradd', user, this.httpOptions).pipe(
            catchError(this.handleError<User>(APIURL + 'useradd')));
        obs.subscribe(() => this.createUser(user));
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