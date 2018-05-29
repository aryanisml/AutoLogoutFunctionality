declare var require: any;
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
// const MockData: any = require('../assets/data/getAppData.json');
@Injectable({
  providedIn: 'root'
})
export class CommonSampleAppService {

  startWatcher: Subject<any>;
  constructor() {
    this.startWatcher = new Subject<any>();
  }

  getData(): string {
    return 'Hello World';
    //  return MockData;
  }

}
