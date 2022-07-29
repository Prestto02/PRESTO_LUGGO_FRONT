import { TestBed } from '@angular/core/testing';

import { DireccionUsersService } from './direccion-users.service';

describe('DireccionUsersService', () => {
  let service: DireccionUsersService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DireccionUsersService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
