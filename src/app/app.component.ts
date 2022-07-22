import { ShareService } from './core/services/share.service';
import { Component, Input, OnInit } from '@angular/core';
@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
    constructor() {}

    getValueChange($event: any) {
        console.log($event);
    }

    ngOnInit(): void {}
}
