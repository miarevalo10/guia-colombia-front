import {Injectable} from '@angular/core';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {Tour} from './Tour';

@Injectable({
    providedIn: 'root'
})
export class TourService {

    private TOUR_SERVICE = `${environment.url}/guiaturismo/tour`;
    private tourList = [];

    constructor(private httpClient: HttpClient) {
    }

    getTourList(id: number): Observable<Tour[]> {
        this.tourList = [];
        return this.httpClient.get<Tour[]>(this.TOUR_SERVICE + '?idGuia=' + id);
    }
}
