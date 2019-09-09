import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Guide} from './Guide';
import {environment} from '../environments/environment';
import {HttpClient} from '@angular/common/http';
import {City} from "./City";
import {Category} from "./Category";

@Injectable({
    providedIn: 'root'
})
export class GuideService {
    private GUIDE_SERVICE = `${environment.url}/guiaturismo/guide`;
    private guideList = [];

    constructor(private httpClient: HttpClient) {
    }

    getGuideList(): Observable<Guide[]> {
        this.guideList = [];
        return this.httpClient.get<Guide[]>(this.GUIDE_SERVICE);
    }

    getFilteredList(selectedCity: City, selectedCategory: Category): Observable<Guide[]> {
        this.guideList = [];
        return this.httpClient.get<Guide[]>(this.GUIDE_SERVICE + '?cityId=' + selectedCity.id + '&categoryId=' + selectedCategory.id);
    }
}
