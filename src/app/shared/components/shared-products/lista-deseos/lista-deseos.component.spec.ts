import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ToastConfig } from '../../../Toasts/ToastsConfig';
import { CarritoItemsComponent } from '../../index/menu-index/menu/carrito-items/carrito-items.component';

import { ListaDeseosComponent } from './lista-deseos.component';

describe('ListaDeseosComponent', () => {
  let component: ListaDeseosComponent;
  let fixture: ComponentFixture<ListaDeseosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ToastConfig, HttpClientTestingModule],
      declarations: [ListaDeseosComponent, CarritoItemsComponent],
      providers: [CarritoItemsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListaDeseosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
