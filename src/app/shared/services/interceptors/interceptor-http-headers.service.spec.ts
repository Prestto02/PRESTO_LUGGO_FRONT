import { TestBed } from '@angular/core/testing';

import { InterceptorHttpHeadersService } from './interceptor-http-headers.service';

describe('InterceptorHttpHeadersService', () => {
  let service: InterceptorHttpHeadersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(InterceptorHttpHeadersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
