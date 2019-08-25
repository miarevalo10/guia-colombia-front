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

    constructor(private httpClient:HttpClient) {
    }

    getGuideList(): Observable<Guide[]> {
        this.guideList = [];
        this.httpClient.get(this.GUIDE_SERVICE).subscribe((data: Array<any>) => {
            data.forEach(dataItem => {
                let guide = new Guide();
                guide.id = dataItem.pk;
                guide.name = dataItem.name;
                guide.phrase = dataItem.phrase;
                guide.photo = dataItem.photo;
                guide.facebook = dataItem.facebook;
                guide.instagram = dataItem.instagram;
                guide.phone = dataItem.phone;
                guide.email = dataItem.email;
                guide.cityId = dataItem.cityId;
                this.guideList.push(guide);
            });
        });
        return of(this.guideList);
    }
}
