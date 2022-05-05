import { TestBed } from '@angular/core/testing';

import { ServicesColorService } from './services-color.service';

describe('ServicesColorService', () => {
  let service: ServicesColorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ServicesColorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
