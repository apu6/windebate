import { TestBed, inject } from '@angular/core/testing';

import { MenteesService } from './mentees.service';

describe('MenteesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MenteesService]
    });
  });

  it('should be created', inject([MenteesService], (service: MenteesService) => {
    expect(service).toBeTruthy();
  }));
});
