import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProductosAtributosComponent } from './productos-atributos.component';

describe('ProductosAtributosComponent', () => {
  let component: ProductosAtributosComponent;
  let fixture: ComponentFixture<ProductosAtributosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProductosAtributosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProductosAtributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
