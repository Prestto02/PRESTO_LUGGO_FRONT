import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';

import { ActivarCuentaService } from './activar-cuenta.service';

describe('ActivarCuentaService', () => {
  let service: ActivarCuentaService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, RouterTestingModule],
    });
    service = TestBed.inject(ActivarCuentaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
