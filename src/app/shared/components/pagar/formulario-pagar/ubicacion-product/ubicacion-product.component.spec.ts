import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UbicacionProductComponent } from './ubicacion-product.component';

describe('UbicacionProductComponent', () => {
  let component: UbicacionProductComponent;
  let fixture: ComponentFixture<UbicacionProductComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UbicacionProductComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UbicacionProductComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
