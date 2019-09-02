import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Guide} from '../Guide';

@Component({
    selector: 'app-guide',
    templateUrl: './guide.component.html',
    styleUrls: ['./guide.component.css']
})
export class GuideComponent implements OnInit {
    @Input() guide: Guide;
    @Output() eventEmitter = new EventEmitter();

    constructor() {
    }

    ngOnInit() {
    }

    return() {
        this.eventEmitter.emit();
    }

}
