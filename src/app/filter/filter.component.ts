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
    @Output() selectedCity: EventEmitter<City> = new EventEmitter();
    @Output() selectedCategory: EventEmitter<Category> = new EventEmitter();

    constructor(private cityService: CityService,
                private categoryService: CategoryService,
                public globals: Globals) {
    }

    ngOnInit() {
        console.warn('cargando filtros');
        this.getCityList();
        this.getCategoryList();
    }

    private getCityList(): void {
        this.cityList = this.cityService.getCityList();
        // .subscribe(cityList => this.cityList = cityList);
        console.warn(this.cityList);
    }

    private getCategoryList() {
        this.categoryList = this.categoryService.getCategoryList();
        console.warn(this.categoryList);
        // .subscribe(categoryList => this.categoryList = categoryList);
    }

    selectCategory(category: Category) {
        console.warn('category selected ' + category.description);
        this.selectedCategory.emit(category);
    }

    selectCity(city: City) {
        console.warn('city selected ' + city.name);
        this.selectedCity.emit(city);
    }
}
