import {Component, Input, OnInit} from '@angular/core';
import {Tour} from '../Tour';
import {TourService} from '../tour.service';

@Component({
    selector: 'app-tour-list',
    templateUrl: './tour-list.component.html',
    styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {
    tourList = [];
    @Input() tourId: number;

    constructor(private tourService: TourService) {
    }

    ngOnInit() {
        this.getTourList();
    }

    getTourList() {
        this.tourService.getTourList(this.tourId).subscribe(value => this.loadPage(value));
    }

    private loadPage(tourList: Tour[]) {
        this.tourList = tourList;
        for (const tour of this.tourList){
            tour.activityList = tour.activities.split(';');
        }
        console.warn(tourList);
    }
}
