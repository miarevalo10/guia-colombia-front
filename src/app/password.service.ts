import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class PasswordService {

    constructor(private httpClient: HttpClient) {
    }

    PASSWORD_SERVICE = `${environment.url}/users/user/`;

    changePassword(password: {}): Observable<any> {
        return this.httpClient.patch(this.PASSWORD_SERVICE, password);
    }
}
