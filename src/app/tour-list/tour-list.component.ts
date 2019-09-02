import {Component, Input, OnInit} from '@angular/core';
import {Tour} from '../Tour';
import {TourService} from '../tour.service';
import {ActivatedRoute} from '@angular/router';

@Component({
    selector: 'app-tour-list',
    templateUrl: './tour-list.component.html',
    styleUrls: ['./tour-list.component.css']
})
export class TourListComponent implements OnInit {
    tourList = [];
    tourId: number;

    constructor(private tourService: TourService, private route: ActivatedRoute) {
    }

    ngOnInit() {
        this.getTourList();
    }

    getTourList() {
        this.tourId = Number(this.route.snapshot.paramMap.get('id'));
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
