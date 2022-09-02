import { TestBed } from '@angular/core/testing';

import { PoliticsService } from './politics.service';

describe('PoliticsService', () => {
  let service: PoliticsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliticsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
