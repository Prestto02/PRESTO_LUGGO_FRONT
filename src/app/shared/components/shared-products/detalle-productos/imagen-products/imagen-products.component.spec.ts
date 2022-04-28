import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenProductsComponent } from './imagen-products.component';

describe('ImagenProductsComponent', () => {
  let component: ImagenProductsComponent;
  let fixture: ComponentFixture<ImagenProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
