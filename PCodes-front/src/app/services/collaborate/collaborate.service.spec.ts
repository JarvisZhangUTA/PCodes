import { TestBed, inject } from '@angular/core/testing';

import { CollaborateService } from './collaborate.service';

describe('CollaborateService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CollaborateService]
    });
  });

  it('should be created', inject([CollaborateService], (service: CollaborateService) => {
    expect(service).toBeTruthy();
  }));
});
