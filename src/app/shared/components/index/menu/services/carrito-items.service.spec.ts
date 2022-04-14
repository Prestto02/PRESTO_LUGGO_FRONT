import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { CarritoItemsService } from './carrito-items.service';
import { ToastConfig } from 'src/app/shared/Toasts/ToastsConfig';

describe('CarritoItemsService', () => {
  let service: CarritoItemsService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastConfig],
    });
    service = TestBed.inject(CarritoItemsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
