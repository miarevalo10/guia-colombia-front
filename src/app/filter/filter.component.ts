import { Component, OnInit } from '@angular/core';
import { CityService } from '../city.service';
import { Observable } from 'rxjs';
import { City } from "../City";
import { Category } from "../Category";
import { CategoryService } from "../category.service";

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    cityList: City[];
    categoryList: Category[];

    constructor(private cityService: CityService, private categoryService: CategoryService) {
    }

    ngOnInit() {
        this.getCityList();
        this.getCategoryList();
    }

    private getCityList(): void {
        this.cityService.getCityList().subscribe(cityList => this.cityList = cityList);
    }

    private getCategoryList() {
        this.categoryService.getCategoryList().subscribe(categoryList => this.categoryList = categoryList);
    }
}
