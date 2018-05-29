import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudycreateComponent } from './studycreate.component';

describe('StudycreateComponent', () => {
  let component: StudycreateComponent;
  let fixture: ComponentFixture<StudycreateComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudycreateComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudycreateComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
