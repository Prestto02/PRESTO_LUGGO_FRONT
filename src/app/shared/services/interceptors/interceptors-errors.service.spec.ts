import { TestBed } from '@angular/core/testing';
import { ToastConfig } from '../../Toasts/ToastsConfig';

import { InterceptorsErrorsService } from './interceptors-errors.service';

describe('InterceptorsErrorsService', () => {
  let service: InterceptorsErrorsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastConfig],
    });
    service = TestBed.inject(InterceptorsErrorsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
