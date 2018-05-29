import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'lib-studygrid',
  templateUrl: './studygrid.component.html',
  styleUrls: ['./studygrid.component.css']
})
export class StudygridComponent implements OnInit {
  public gridData: any;
  @Output() ShowEvent: EventEmitter<string>;
  constructor(private route: ActivatedRoute) {

    this.ShowEvent = new EventEmitter<any>();
  }

  ngOnInit() {
    //  console.dir(this.route.snapshot.paramMap.get('id'));
    this.route.data.subscribe(v => {
      this.gridData = v.passdata;
     // console.dir(this.gridData);
    });
   // this.route.parent.params.subscribe(v => console.log(v.passdata));
  }

  Show() {
    this.ShowEvent.emit('Hello World.');
  }
}
