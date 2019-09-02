import {Component, Input, OnInit} from '@angular/core';
import {Tour} from '../Tour';
import {TourService} from '../tour.service';
import {Router} from '@angular/router';

@Component({
    selector: 'app-tour-list',
    templateUrl: './tour-list.component.html',
    styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {
    tourList = [];
    tourId: number;

    constructor(private tourService: TourService, private router: Router) {
    }

    ngOnInit() {
        this.getTourList();
    }

    getTourList() {
        // look for a more practical way
        this.tourId = Number(this.router.url.split('/')[2])
        this.tourService.getTourList(this.tourId).subscribe(value => this.loadPage(value));
    }

    private loadPage(tourList: Tour[]) {
        this.tourList = tourList;
        for (const tour of this.tourList) {
            tour.activityList = tour.activities.split(';');
        }
        console.warn(tourList);
    }
}
