import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Globals } from './globals';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MailService {

  mailUrl = `${environment.url}/guiaturismo/sendEmail`;

  constructor(private httpClient: HttpClient,
              private globals: Globals) { }

  sendMail(tourId: number) {
    const httpOptions = {
      headers: new HttpHeaders({
        Authorization: `Token ${this.globals.getToken()}`
      })
    };
    const body = {
      tourId,
      userId: this.globals.getUser().id
    };
    return this.httpClient.post(this.mailUrl, body, httpOptions);
  }
}
