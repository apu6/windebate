import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MenteesComponent } from './mentees.component';

describe('MenteesComponent', () => {
  let component: MenteesComponent;
  let fixture: ComponentFixture<MenteesComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenteesComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MenteesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
