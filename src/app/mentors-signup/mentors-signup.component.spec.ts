import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MentorsSignupComponent } from './mentors-signup.component';

describe('MentorsSignupComponent', () => {
  let component: MentorsSignupComponent;
  let fixture: ComponentFixture<MentorsSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MentorsSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MentorsSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
