import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl = `${environment.url}/users/user/`;
  loginUrl = `${environment.url}/guiaturismo/login/`;

  constructor(private httpClient: HttpClient) { }

  toSnakeCase(key: any) {
    return key.replace( /([A-Z])/g, '_$1').toLowerCase();
  }

  transformUser(user: {}) {
    const userSnakeCase = {};
    for (const key of Object.keys(user)) {
      userSnakeCase[this.toSnakeCase(key)] = user[key];
    }
    return userSnakeCase;
  }

  registerUser(user: {}): Observable<any> {
    return this.httpClient.post(this.usersUrl, this.transformUser(user));
  }

  login(user: {}): Observable<any>  {
    return this.httpClient.post(this.loginUrl, this.transformUser(user));
  }
}
