import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {CityService} from '../city.service';
import {City} from '../City';
import {Category} from '../Category';
import {CategoryService} from '../category.service';
import {Globals} from '../globals';

@Component({
    selector: 'app-filter',
    templateUrl: './filter.component.html',
    styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
    cityList: City[];
    categoryList: Category[];
    selectedCity: City;
    selectedCategory: Category;
    @Output() selectedCityEvent: EventEmitter<City> = new EventEmitter();
    @Output() selectedCategoryEvent: EventEmitter<Category> = new EventEmitter();

    constructor(private cityService: CityService,
                private categoryService: CategoryService,
                public globals: Globals) {
    }

    ngOnInit() {
        this.getCityList();
        this.getCategoryList();
    }

    private getCityList(): void {
        this.cityList = this.cityService.getCityList();
        // .subscribe(cityList => this.cityList = cityList);
    }

    private getCategoryList() {
        this.categoryList = this.categoryService.getCategoryList();
        console.warn(this.categoryList);
        // .subscribe(categoryList => this.categoryList = categoryList);
    }

    selectCategory() {
        console.warn('category selected ' + this.selectedCategory);
        this.selectedCategoryEvent.emit(this.selectedCategory);
    }

    selectCity() {
        console.warn('city selected ' + this.selectedCity);
        this.selectedCityEvent.emit(this.selectedCity);
    }
}
