import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LindseyArticle2Component } from './lindsey-article2.component';

describe('LindseyArticle2Component', () => {
  let component: LindseyArticle2Component;
  let fixture: ComponentFixture<LindseyArticle2Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LindseyArticle2Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LindseyArticle2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
