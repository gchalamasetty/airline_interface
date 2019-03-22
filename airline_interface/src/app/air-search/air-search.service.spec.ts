import { TestBed, inject } from '@angular/core/testing';

import { AirSearchService } from './air-search.service';

describe('AirSearchService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirSearchService]
    });
  });

  it('should be created', inject([AirSearchService], (service: AirSearchService) => {
    expect(service).toBeTruthy();
  }));
});
