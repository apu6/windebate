import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ViewMyHoursComponent } from './view-my-hours.component';

describe('ViewMyHoursComponent', () => {
  let component: ViewMyHoursComponent;
  let fixture: ComponentFixture<ViewMyHoursComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ViewMyHoursComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ViewMyHoursComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
