import { TestBed } from '@angular/core/testing';
import { ToastrModule } from 'ngx-toastr';
import { ToastConfig } from 'src/app/shared/Toasts/ToastsConfig';

import { CompararProductosService } from './comparar-productos.service';

describe('CompararProductosService', () => {
  let service: CompararProductosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [ToastConfig],
    });
    service = TestBed.inject(CompararProductosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
