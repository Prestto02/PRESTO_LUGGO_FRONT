import { TestBed } from '@angular/core/testing';

import { VerificarParamsService } from './verificar-params.service';

describe('VerificarParamsService', () => {
  let service: VerificarParamsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(VerificarParamsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
