import { Component, OnInit, Input, ViewEncapsulation, EventEmitter, Output } from '@angular/core';

@Component({
    selector: 'app-message',
    template: `<div>{{message}}</div><button (click)="Show()" name='myBtn' id="myBtn">Show</button>`,
    encapsulation: ViewEncapsulation.Native
})

export class MessageComponent implements OnInit {
    @Input() message = 'Hello World 3';
    @Output() showEvent: EventEmitter<any> = new EventEmitter<any>();
    constructor() { }

    ngOnInit() { }
    Show() {
        this.showEvent.emit('myData');
    }
}
