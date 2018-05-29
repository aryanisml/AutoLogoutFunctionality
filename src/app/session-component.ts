import { Component, OnInit, EventEmitter, Output, Input } from '@angular/core';


@Component({
    selector: 'app-session',
    template: `
    <kendo-dialog title="Action required">
    <p style="margin: 30px; text-align: center;"> Do you want to continue or log out ? </p>
    <kendo-dialog-actions>
    <button class="btn-sm btn-cancel" kendoButton (click)='close()'>Close</button>
    <button class="btn-sm btn-save" kendoButton (click)='continue()'>Continue </button>
    </kendo-dialog-actions>
    </kendo-dialog>
  `
})

export class SessionComponent implements OnInit {
    @Output() public closeEvent: EventEmitter<String>;
    @Output() public continueEvent: EventEmitter<string>;

    public _timerCount: number;
    _paddingpx: string;
    _ping: string;

    constructor() {
        this.closeEvent = new EventEmitter<String>();
        this.continueEvent = new EventEmitter<string>();
        this._paddingpx = '3px';
    }

    ngOnInit() { }

    close() {
        console.log('close');
        this.closeEvent.emit('Create Window Closed');
    }
    continue() {
        this.continueEvent.emit('continue...');
        console.log('continue...');
    }

    @Input()
    public get timerCount(): number {
        return this._timerCount;
    }

    public set timerCount(v: number) {
        this._timerCount = v;
    }

    @Input()
    public get lastPing(): string {
        return this._ping;
    }


    public set lastPing(v: string) {
        this._ping = v;
    }



    public get paddingpx(): string {
        return this._paddingpx;
    }

    public set paddingpx(v: string) {
        this._paddingpx = v;
    }


}
