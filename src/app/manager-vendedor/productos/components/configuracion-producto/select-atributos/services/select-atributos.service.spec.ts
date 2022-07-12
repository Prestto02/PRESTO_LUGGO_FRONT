import { TestBed } from '@angular/core/testing';

import { SelectAtributosService } from './select-atributos.service';

describe('SelectAtributosService', () => {
  let service: SelectAtributosService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SelectAtributosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
