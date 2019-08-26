import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authUrl = `${environment.url}/users/api-token-auth/`;
  userTokenKey = 'userToken';
  userKey = 'user';
  userToken: string;
  user: {};
  constructor(private httpClient: HttpClient) {
    this.getUserFromLS();
   }

  signIn(user: {}): Observable<any> {
    return this.httpClient.post(this.authUrl, user);
  }

  getUserFromLS() {
    if (this.localStorageAvailable() && localStorage.getItem(this.userTokenKey)) {
      this.userToken = localStorage.getItem(this.userTokenKey);
      this.user = JSON.parse(localStorage.getItem(this.userKey));
    }
  }

  addUserLocalStorage(token, user) {
    if (this.localStorageAvailable()) {
      localStorage.setItem(this.userTokenKey, token);
      localStorage.setItem(this.userKey, JSON.stringify(user));
    }
  }

  private localStorageAvailable() {
    return typeof Storage !== 'undefined';
  }

  removeTokenLocalStorage() {
    if (this.localStorageAvailable()) {
      localStorage.removeItem(this.userTokenKey);
      localStorage.removeItem(this.userKey);
    }
  }

  isLoggedIn(): boolean {
    if (this.localStorageAvailable()) {
      return !!localStorage.getItem(this.userTokenKey);
    }
    return false;
  }

}
