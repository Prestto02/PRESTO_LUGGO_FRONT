import { TestBed } from '@angular/core/testing';

import { CiudadPaisService } from './ciudad-pais.service';

describe('CiudadPaisService', () => {
  let service: CiudadPaisService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CiudadPaisService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
