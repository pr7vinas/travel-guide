import { TestBed } from '@angular/core/testing';

import { TravelGuidesService } from './travel-guides.service';

describe('TravelGuidesService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: TravelGuidesService = TestBed.get(TravelGuidesService);
    expect(service).toBeTruthy();
  });
});
