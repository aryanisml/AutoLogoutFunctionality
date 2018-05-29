import { Component, OnInit, EventEmitter, Output } from '@angular/core';

import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
import { CommonSampleAppService } from './common-sample-app.service';


@Component({
    selector: 'lib-common-sample-login',
    templateUrl: './common-sample-login.component.html',
    styleUrls: ['./common-sample-login.scss']
})

export class CommonSampleLoginComponent implements OnInit {
    @Output() startWatch: EventEmitter<string>;
    validInfo = false;
    username: string;
    password: string;
    constructor(private router: Router, private commonSampleAppService: CommonSampleAppService) {
        this.startWatch = new EventEmitter<string>();
    }

    ngOnInit() { }

    Sumbit() {
            console.log('Hi....');
            this.router.config.push({ path: 'app' });
            const navigationExtras = '1';
            this.startWatch.emit('Start....');
            this.commonSampleAppService.startWatcher.next('Start');
           // this.router.navigate(['app', navigationExtras]);
           this.router.navigate(['app']);
    }
}
