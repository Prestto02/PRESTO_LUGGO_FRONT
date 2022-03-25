import { TestBed } from '@angular/core/testing';

import { InterceptorsErrorsService } from './interceptors-errors.service';

describe('InterceptorsErrorsService', () => {
  let service: InterceptorsErrorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorsErrorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
