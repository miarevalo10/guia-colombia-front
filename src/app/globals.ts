import { Injectable } from '@angular/core';
import { User } from './user';
import {UtilsService} from './utils.service';

@Injectable({
    providedIn: 'root'
})
export class Globals {
    user: User = null;
    token = '0.0.0';

    constructor(private utilsService: UtilsService) {
}
    setToken(tokenVar: string) {
        this.token = tokenVar;
    }

    getToken() {
        return (this.token);
    }

    setUser(user: User) {
        this.user = this.utilsService.transformObj(user, this.utilsService.toCamelCase) as User;
    }

    getUser() {
        return (this.user);
    }

    clearData() {
        this.user = null;
        this.token = null;
    }
}
