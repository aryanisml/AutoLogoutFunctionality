import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-common-sample-app',
  template: `
  <div class="myApp">
    <router-outlet></router-outlet>
    </div>
  `,
  styleUrls: ['./common-sample-app.component.scss'],
})
export class CommonSampleAppComponent implements OnInit {

  _size: number;
  constructor() {
    this._size = 1;
   }

  ngOnInit() {
  }

  public get size(): number {
    return this._size + 0.5;
  }


  public set size(v: number) {
    this._size = v + 3;
  }





  Change() {
    console.log('Hi....');
    //  this.router.config.push({ path: 'app' });
    // this.router.navigate(['app']);
  }

}
