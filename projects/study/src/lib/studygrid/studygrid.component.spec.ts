import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudygridComponent } from './studygrid.component';

describe('StudygridComponent', () => {
  let component: StudygridComponent;
  let fixture: ComponentFixture<StudygridComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudygridComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudygridComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
