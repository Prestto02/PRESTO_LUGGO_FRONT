import { TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { ToastConfig } from '../ToastsConfig';

import { MessageFrontEndService } from './message-front-end.service';

describe('MessageFrontEndService', () => {
  let service: MessageFrontEndService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastrModule, ToastConfig],
    });
    service = TestBed.inject(MessageFrontEndService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
