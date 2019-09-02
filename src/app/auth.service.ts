import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';
import {User} from './user';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = `${environment.url}/users/api-token-auth/`;

  constructor(private httpClient: HttpClient) {
   }

  signIn(user: {}): Observable<any> {
    return this.httpClient.post(this.authUrl, user);
  }

}
