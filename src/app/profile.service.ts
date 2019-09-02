import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Observable} from 'rxjs';
import { AuthService } from './auth.service';
import { UtilsService } from './utils.service';
import { Globals } from './globals';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private httpClient: HttpClient, private utils: UtilsService,
              private authService: AuthService, private globals: Globals) {
  }

  UPDATE_PROFILE_SERVICE = `${environment.url}/users/user/`;

  updateProfile(profile: {}): Observable<any> {
    const userId = this.globals.user.id;
    return this.httpClient.patch(`${this.UPDATE_PROFILE_SERVICE}${userId}/`, this.utils.transformObj(profile, this.utils.toSnakeCase));
  }
}
