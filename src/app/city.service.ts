import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Observable, of} from 'rxjs';
import {City} from './City';
import {environment} from '../environments/environment';
import {Globals} from './globals';

@Injectable({
    providedIn: 'root'
})
export class CityService {

    CITY_SERVICE = `${environment.url}/guiaturismo/city`;
    private cityList = [];

    constructor(private httpClient: HttpClient,
                private globals: Globals) {
    }

    getCityList(): City[] {
        this.cityList = [{
            id: 1,
            name: 'Bogota'
        },
            {
                id: 2,
                name: 'Medellin'
            }];
        // const httpOptions = {
        //     headers: new HttpHeaders({
        //         Authorization: `Token ${this.globals.getToken()}`
        //     })
        // };
        //
        // this.httpClient.get(this.CITY_SERVICE, httpOptions).subscribe((data: Array<any>) => {
        //     data.forEach(dataItem => {
        //         const city = new City();
        //         city.id = dataItem.pk;
        //         city.name = dataItem.fields.name;
        //         this.cityList.push(city);
        //     });
        // });
        return this.cityList;
    }


}
