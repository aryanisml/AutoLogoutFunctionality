
declare var require: any;
import { Component, Injector, OnInit } from '@angular/core';
import { createCustomElement } from '@angular/elements';
import { MessageComponent } from './message.component';
import { CommonSampleAppService } from 'common-sample-app';
import { DomSanitizer } from '@angular/platform-browser';
const MockData: any = require('../assets/data/getAppData.json');

import { Idle, DEFAULT_INTERRUPTSOURCES } from '@ng-idle/core';
import { Keepalive } from '@ng-idle/keepalive';

import { UserIdleService } from 'user-idle';
import { Subscription } from 'rxjs';
import { tap } from 'rxjs/operators';
import { SessionComponent } from './session-component';
import { WindowRef, WindowService } from '@progress/kendo-angular-dialog';
import { Router, ActivatedRoute, NavigationExtras } from '@angular/router';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'app';
  content;

  idleState = 'Not started.';
  // timedOut = false;
  // lastPing?: Date = null;

  idle: number;
  lastPing?: string = null;
  timeout: number;
  ping: number;
  isWatching: boolean;
  isTimer: boolean;
  timeIsUp: boolean;
  timerCount: number;
  toShowOverlay: Boolean = false;


  private timerStartSubscription: Subscription;
  private timeoutSubscription: Subscription;
  private pingSubscription: Subscription;
  sessionComponent: SessionComponent;


  constructor(private commonSampleAppService: CommonSampleAppService,
    private injector: Injector,
    private domSanitzer: DomSanitizer,
    // private idle: Idle,
    private keepalive: Keepalive,
    private userIdle: UserIdleService,
    private windowService: WindowService,
    private route: Router) {
    /*
  this.content = null;
  console.log(this.commonSampleAppService.getData());
  console.log(MockData);
  const messageElement = createCustomElement(MessageComponent, { injector });
  customElements.define('my-message', messageElement);

  setTimeout(() => {
    this.content = this.domSanitzer.bypassSecurityTrustHtml(`<my-message
     message='Custom Element' (showEvent)='myClick($event)'></my-message>`);
  }, 500);
  */

    /*   ng2-ideal
    // sets an idle timeout of 5 seconds, for testing purposes.
    idle.setIdle(5);
    // sets a timeout period of 5 seconds. after 10 seconds of inactivity, the user will be considered timed out.
    idle.setTimeout(5);
    // sets the default interrupts, in this case, things like clicks, scrolls, touches to the document
    idle.setInterrupts(DEFAULT_INTERRUPTSOURCES);

    idle.onIdleEnd.subscribe(() => this.idleState = 'No longer idle.');
    idle.onTimeout.subscribe(() => {
      this.idleState = 'Timed out!';
      this.timedOut = true;
    });
    idle.onIdleStart.subscribe(() => this.idleState = 'You\'ve gone idle!');
    idle.onTimeoutWarning.subscribe((countdown) => this.idleState = 'You will time out in ' + countdown + ' seconds!');

    // sets the ping interval to 15 seconds
    keepalive.interval(15);

    keepalive.onPing.subscribe(() => this.lastPing = new Date());

    this.reset();
*/
  }



  ngOnInit() {
    this.idle = this.userIdle.getConfigValue().idle;
    this.timeout = this.userIdle.getConfigValue().timeout;
    this.ping = this.userIdle.getConfigValue().ping;
    console.log(this.idle);
    this.commonSampleAppService.startWatcher.subscribe((data) => {
      this.onStartWatching();
    });
    // this.onStartWatching();
  }

  onStartWatch(data) {
    console.log('Watch Start.....');
    this.onStartWatching();
  }





  onStartWatching() {
    this.isWatching = true;
    this.timerCount = this.timeout;
    this.idle = 5;
    this.timeout = 2;
    this.ping = 1;
    this.userIdle.setConfigValues({
      idle: this.idle,
      timeout: this.timeout,
      ping: this.ping
    });

    // Start watching for user inactivity.
    this.userIdle.startWatching();

    // Start watching when user idle is starting.
    this.timerStartSubscription = this.userIdle.onTimerStart()
      .pipe(tap(() => this.isTimer = true))
      .subscribe(count => this.timerCount = count);

    // Start watch when time is up.
    this.timeoutSubscription = this.userIdle.onTimeout()
      .subscribe(() => {
        this.timeIsUp = true;
        this.toShowOverlay = true;
        this.toShowOverlay = true;
        const window: WindowRef = this.windowService.open({ content: SessionComponent });
        this.sessionComponent = window.content.instance;
        this.sessionComponent.timerCount = this.timerCount;
        this.sessionComponent.lastPing = this.lastPing;
        this.sessionComponent.closeEvent.subscribe((msg) => {
          console.log(msg);
          window.close();
          this.toShowOverlay = false;
          this.isTimer = false;
          this.timeIsUp = false;
          this.route.navigate(['']);
          this.userIdle.stopWatching();
        });
        this.sessionComponent.continueEvent.subscribe((msg) => {
          console.log(msg);
          this.toShowOverlay = false;
          window.close();
          this.userIdle.resetTimer();
          this.isTimer = false;
          this.timeIsUp = false;
          this.isWatching = true;
          this.timerCount = this.timeout;
          this.idle = 5;
          this.timeout = 2;
          this.ping = 10;
          this.userIdle.startWatching();
        });
        console.log('timeUp...');
      });

    this.pingSubscription = this.userIdle.ping$
      .subscribe(value => this.lastPing = `#${value} at ${new Date().toString()}`);
  }
  myClick(data) {
    console.log(data);
  }


  reset() {
    // this.idle.watch();
    this.idleState = 'Started.';
    //    this.timeOut = false;

    this.userIdle.resetTimer();
    this.isTimer = false;
    this.timeIsUp = false;
  }
}
