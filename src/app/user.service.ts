import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  usersUrl = `${environment.url}/users/user/`;


  constructor(private httpClient: HttpClient) { }

  toSnakeCase(key: any) {
    return key.replace( /([A-Z])/g, '_$1').toLowerCase();
  }

  registerUser(user: {}): Observable<any> {
    console.log('userr', user);
    const userSnakeCase = {};
    for (const key of Object.keys(user)) {
      userSnakeCase[this.toSnakeCase(key)] = user[key];
    }
    console.log('transformed obj', userSnakeCase);
    return this.httpClient.post(this.usersUrl, userSnakeCase);
  }
}
