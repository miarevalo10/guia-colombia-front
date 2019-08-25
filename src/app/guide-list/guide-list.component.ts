import {Component, OnInit} from '@angular/core';
import {GuideService} from '../guide.service';
import {Guide} from '../Guide';

@Component({
    selector: 'app-guide-list',
    templateUrl: './guide-list.component.html',
    styleUrls: ['./guide-list.component.css']
})
export class GuideListComponent implements OnInit {

    private guideList = [];

    constructor(private guideService: GuideService) {
    }

    ngOnInit() {
        this.getGuideList();
    }

    private getGuideList() {
        this.guideService.getGuideList().subscribe(value => this.guideList = value);
    }
}
