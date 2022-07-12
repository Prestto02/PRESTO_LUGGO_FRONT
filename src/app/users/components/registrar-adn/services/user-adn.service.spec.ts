import { TestBed } from '@angular/core/testing';

import { UserAdnService } from './user-adn.service';

describe('UserAdnService', () => {
  let service: UserAdnService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(UserAdnService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
