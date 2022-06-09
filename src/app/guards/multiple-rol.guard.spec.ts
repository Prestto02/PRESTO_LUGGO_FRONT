import { TestBed } from '@angular/core/testing';

import { MultipleRolGuard } from './multiple-rol.guard';

describe('MultipleRolGuard', () => {
  let guard: MultipleRolGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(MultipleRolGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
