import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LindseyArticleComponent } from './lindsey-article.component';

describe('LindseyArticleComponent', () => {
  let component: LindseyArticleComponent;
  let fixture: ComponentFixture<LindseyArticleComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LindseyArticleComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LindseyArticleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
