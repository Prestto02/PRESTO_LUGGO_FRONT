import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { BrowserDynamicTestingModule } from '@angular/platform-browser-dynamic/testing';
import { ToastConfig } from 'src/app/shared/Toasts/ToastsConfig';
import { CarritoItemsComponent } from '../../index/menu/carrito-items/carrito-items.component';

import { SharedProductsComponent } from './shared-products.component';

describe('SharedProductsComponent', () => {
  let component: SharedProductsComponent;
  let fixture: ComponentFixture<SharedProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
        BrowserDynamicTestingModule,
        ToastConfig,
      ],
      declarations: [SharedProductsComponent, CarritoItemsComponent],
      providers: [CarritoItemsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SharedProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
