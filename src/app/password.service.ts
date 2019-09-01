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

    PASSWORD_SERVICE = `${environment.url}/password`;

    changePassword(password: {}): Observable<any> {
        return this.httpClient.post(this.PASSWORD_SERVICE, password);
    }
}
