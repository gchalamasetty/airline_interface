import { TestBed, inject } from '@angular/core/testing';

import { AirResultService } from './air-result.service';

describe('AirResultService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AirResultService]
    });
  });

  it('should be created', inject([AirResultService], (service: AirResultService) => {
    expect(service).toBeTruthy();
  }));
});
