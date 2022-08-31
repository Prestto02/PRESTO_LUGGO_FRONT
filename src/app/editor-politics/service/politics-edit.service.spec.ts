import { TestBed } from '@angular/core/testing';

import { PoliticsEditService } from './politics-edit.service';

describe('PoliticsEditService', () => {
  let service: PoliticsEditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PoliticsEditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
