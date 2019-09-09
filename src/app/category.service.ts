import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Category} from './Category';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {environment} from '../environments/environment';
import {Globals} from './globals';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    CATEGORY_SERVICE = `${environment.url}/guiaturismo/category`;
    categoryList: Category[];

    constructor(private httpClient: HttpClient,
                private globals: Globals) {
    }

    getCategoryList(): Observable<Category[]> {
        this.categoryList = [];

        const httpOptions = {
            headers: new HttpHeaders({
                Authorization: `Token ${this.globals.getToken()}`
            })
        };
        this.httpClient.get(this.CATEGORY_SERVICE, httpOptions).subscribe((data: Array<any>) => {
            data.forEach(dataItem => {
                const category = new Category();
                category.id = dataItem.pk;
                category.description = dataItem.fields.description;
                this.categoryList.push(category);
            });
        });
        return of(this.categoryList);
    }
}
