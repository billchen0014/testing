import { TestBed } from '@angular/core/testing';

import { DummyTargetBearingService } from './dummy-target-bearing.service';

describe('DummyTargetBearingService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: DummyTargetBearingService = TestBed.get(DummyTargetBearingService);
    expect(service).toBeTruthy();
  });
});
