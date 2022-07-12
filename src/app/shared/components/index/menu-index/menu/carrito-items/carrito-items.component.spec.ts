import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastConfig } from 'src/app/shared/Toasts/ToastsConfig';

import { CarritoItemsComponent } from './carrito-items.component';

describe('CarritoItemsComponent', () => {
  let component: CarritoItemsComponent;
  let fixture: ComponentFixture<CarritoItemsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ToastConfig],
      declarations: [CarritoItemsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoItemsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
