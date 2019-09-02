import {Component, OnInit} from '@angular/core';
import {Guide} from '../Guide';

@Component({
    selector: 'app-main-guide-view',
    templateUrl: './main-guide-view.component.html',
    styleUrls: ['./main-guide-view.component.css']
})
export class MainGuideViewComponent implements OnInit {

    guide: Guide;
    detail = false;

    constructor() {
    }

    ngOnInit() {
    }

    showGuide(event) {
        console.warn('etoy en el main list');
        this.guide = event.guide;
        this.detail = true;
    }

    showList() {
        this.detail = false;
    }
}
