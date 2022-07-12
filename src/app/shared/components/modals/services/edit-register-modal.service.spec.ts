import { TestBed } from '@angular/core/testing';

import { EditRegisterModalService } from './edit-register-modal.service';

describe('EditRegisterModalService', () => {
  let service: EditRegisterModalService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EditRegisterModalService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
