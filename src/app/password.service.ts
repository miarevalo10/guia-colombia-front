import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { Observable } from 'rxjs';
import { UtilsService } from './utils.service';
import { Globals } from './globals';

@Injectable({
    providedIn: 'root'
})
export class PasswordService {

    constructor(private httpClient: HttpClient, private utils: UtilsService,
                private globals: Globals) {
    }

    PASSWORD_SERVICE = `${environment.url}/users/user/`;

    changePassword(password: {}): Observable<any> {
        const userId = this.globals.user.id;
        return this.httpClient.patch(`${this.PASSWORD_SERVICE}${userId}/`, this.utils.transformObj(password, this.utils.toSnakeCase));
    }
}
