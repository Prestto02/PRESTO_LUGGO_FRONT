import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarritoIconsComponent } from './carrito-icons.component';

describe('CarritoIconsComponent', () => {
  let component: CarritoIconsComponent;
  let fixture: ComponentFixture<CarritoIconsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarritoIconsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarritoIconsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
