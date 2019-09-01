import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient) {
  }

  UPDATE_PROFILE_SERVICE = `${environment.url}/users/user/`;

  updateProfile(profile: {}): Observable<any> {
    return this.httpClient.patch(this.UPDATE_PROFILE_SERVICE, profile);
  }
}
