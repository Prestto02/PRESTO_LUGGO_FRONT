import { TestBed } from '@angular/core/testing';

import { ClientListPedidosService } from './client-list-pedidos.service';

describe('ClientListPedidosService', () => {
  let service: ClientListPedidosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ClientListPedidosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
