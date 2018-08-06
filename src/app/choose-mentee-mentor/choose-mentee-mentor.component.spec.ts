import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ChooseMenteeMentorComponent } from './choose-mentee-mentor.component';

describe('ChooseMenteeMentorComponent', () => {
  let component: ChooseMenteeMentorComponent;
  let fixture: ComponentFixture<ChooseMenteeMentorComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ChooseMenteeMentorComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ChooseMenteeMentorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
