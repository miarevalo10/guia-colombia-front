import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {City} from "./City";
import {environment} from "../environments/environment";

@Injectable({
    providedIn: 'root'
})
export class CityService {

    CITY_SERVICE = `${environment.url}/guiaturismo/city`
    private cityList = [];

    constructor(private httpClient: HttpClient) {
    }

    getCityList(): Observable<City[]> {
        this.cityList = [];
        this.httpClient.get(this.CITY_SERVICE).subscribe((data: Array<any>) => {
            data.forEach(dataItem => {
                let city = new City();
                city.id = dataItem.pk;
                city.name = dataItem.fields.name;
                this.cityList.push(city);
            });
        });
        return of(this.cityList);
    }


}
