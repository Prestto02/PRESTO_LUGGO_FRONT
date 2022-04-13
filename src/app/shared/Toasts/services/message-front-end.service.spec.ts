import { TestBed } from '@angular/core/testing';

import { MessageFrontEndService } from './message-front-end.service';

describe('MessageFrontEndService', () => {
  let service: MessageFrontEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MessageFrontEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
