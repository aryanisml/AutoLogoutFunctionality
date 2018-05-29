import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CommonSampleAppComponent } from './common-sample-app.component';

describe('CommonSampleAppComponent', () => {
  let component: CommonSampleAppComponent;
  let fixture: ComponentFixture<CommonSampleAppComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CommonSampleAppComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CommonSampleAppComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
