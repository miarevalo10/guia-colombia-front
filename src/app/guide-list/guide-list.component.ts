import {Component, OnInit} from '@angular/core';
import {GuideService} from '../guide.service';
import {Guide} from '../Guide';
import {PageEvent} from '@angular/material/paginator';
import {Router} from '@angular/router';
import {Globals} from '../globals';
import {City} from '../City';
import {Category} from '../Category';

@Component({
    selector: 'app-guide-list',
    templateUrl: './guide-list.component.html',
    styleUrls: ['./guide-list.component.css']
})
export class GuideListComponent implements OnInit {

    activeGuideList = [];
    guideList = [];
    pageSize = 8;
    pageEvent: PageEvent;
    private selectedCity: City;
    private selectedCategory: Category;

    constructor(private guideService: GuideService,
                private router: Router,
                public globals: Globals) {
    }

    ngOnInit() {
        this.getGuideList();
    }

    private getGuideList() {
        this.guideService.getGuideList().subscribe(value => this.loadPage(value));
    }

    loadPage(value: Guide[]) {
        this.guideList = value;
        this.paginate(0);
    }

    paginate(page: number) {
        let activePage = 0;
        if (page < 0) {
            activePage = this.pageEvent.pageIndex;
        } else {
            activePage = page;
        }
        console.warn('page ' + activePage);
        const start = activePage * this.pageSize;
        let end = start + this.pageSize;
        if (end >= this.guideList.length) {
            end = this.guideList.length;
        }
        this.activeGuideList = this.guideList.slice(start, end);
        console.log(this.activeGuideList);

    }

    openTour(id: number) {
        this.router.navigateByUrl(id + '/tours');
    }

    filterCity(city: City) {
        this.selectedCity = city;
        console.warn('City' + city)
        this.guideService.getFilteredList(this.selectedCity, this.selectedCategory).subscribe(value => this.loadPage(value));
    }

    filterCategory(category: Category) {
        console.warn('Categoria' + category)
        this.selectedCategory = category;
        this.guideService.getFilteredList(this.selectedCity, this.selectedCategory).subscribe(value => this.loadPage(value));
    }
}
