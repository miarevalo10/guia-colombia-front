import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {GuideService} from '../guide.service';
import {Guide} from '../Guide';
import {PageEvent} from '@angular/material/paginator';

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
    @Output() eventEmitter = new EventEmitter();

    constructor(private guideService: GuideService) {
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
    }

    setGuide(selectedGuide: Guide) {
        console.warn('le pego a select guide')
        this.eventEmitter.emit(selectedGuide);
    }
}
