import { TestBed } from '@angular/core/testing';

import { ApiPedidosService } from './api-pedidos.service';

describe('ApiPedidosService', () => {
  let service: ApiPedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiPedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
