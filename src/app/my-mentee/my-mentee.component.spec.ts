import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyMenteeComponent } from './my-mentee.component';

describe('MyMenteeComponent', () => {
  let component: MyMenteeComponent;
  let fixture: ComponentFixture<MyMenteeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyMenteeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyMenteeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
