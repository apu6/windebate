import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteesSignupComponent } from './mentees-signup.component';

describe('MenteesSignupComponent', () => {
  let component: MenteesSignupComponent;
  let fixture: ComponentFixture<MenteesSignupComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenteesSignupComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenteesSignupComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
