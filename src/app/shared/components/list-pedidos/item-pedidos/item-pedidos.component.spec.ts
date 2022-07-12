import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemPedidosComponent } from './item-pedidos.component';

describe('ItemPedidosComponent', () => {
  let component: ItemPedidosComponent;
  let fixture: ComponentFixture<ItemPedidosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemPedidosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemPedidosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
