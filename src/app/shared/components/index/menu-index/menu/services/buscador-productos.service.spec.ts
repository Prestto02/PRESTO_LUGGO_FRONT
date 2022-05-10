import { TestBed } from '@angular/core/testing';

import { BuscadorProductosService } from './buscador-productos.service';

describe('BuscadorProductosService', () => {
  let service: BuscadorProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BuscadorProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
