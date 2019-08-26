import {Injectable} from '@angular/core';
import {Observable, of} from "rxjs";
import {Guide} from "./Guide";
import {environment} from "../environments/environment";
import {HttpClient} from '@angular/common/http';

@Injectable({
    providedIn: 'root'
})
export class GuideService {
    private GUIDE_SERVICE = `${environment.url}/guiaturismo/guide`;
    private guideList = [];

    constructor(private httpClient: HttpClient ) {
    }

    getGuideList(): Observable<Guide[]> {
        this.guideList = [];
        return this.httpClient.get<Guide[]>(this.GUIDE_SERVICE);
    }
}
