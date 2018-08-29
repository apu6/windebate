import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { KatieComponent } from './katie.component';

describe('KatieComponent', () => {
  let component: KatieComponent;
  let fixture: ComponentFixture<KatieComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ KatieComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(KatieComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
