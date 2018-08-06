import { TestBed, inject } from '@angular/core/testing';

import { MentorsService } from './mentors.service';

describe('MentorsService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [MentorsService]
    });
  });

  it('should be created', inject([MentorsService], (service: MentorsService) => {
    expect(service).toBeTruthy();
  }));
});
