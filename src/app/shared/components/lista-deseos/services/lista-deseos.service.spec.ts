import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';
import { ToastConfig } from 'src/app/shared/Toasts/ToastsConfig';
import { ListaDeseosService } from './lista-deseos.service';

describe('ListaDeseosService', () => {
  let service: ListaDeseosService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastConfig],
    });
    service = TestBed.inject(ListaDeseosService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
