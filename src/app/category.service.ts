import {Injectable} from '@angular/core';
import {Observable, of} from 'rxjs';
import {Category} from './Category';
import {HttpClient} from '@angular/common/http';
import {environment} from '../environments/environment';

@Injectable({
    providedIn: 'root'
})
export class CategoryService {

    CATEGORY_SERVICE = `${environment.url}/category`
    private categoryList: [];

    constructor(private httpClient: HttpClient) {
    }

    getCategoryList(): Observable<Category[]> {
        this.categoryList = [];
        this.httpClient.get(this.CATEGORY_SERVICE).subscribe((data: Array<any>) => {
            data.forEach(dataItem => {
                let category = Category();
                category.id = dataItem.pk;
                category.name = dataItem.fields.name;
                this.categoryList.push(category);
            });
        });
        return of(this.categoryList);
    }
}