import { TestBed } from '@angular/core/testing';

import { CompararProductosService } from './comparar-productos.service';

describe('CompararProductosService', () => {
  let service: CompararProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CompararProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
