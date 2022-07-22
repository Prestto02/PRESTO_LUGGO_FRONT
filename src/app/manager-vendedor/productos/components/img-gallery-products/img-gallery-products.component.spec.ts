import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgGalleryProductsComponent } from './img-gallery-products.component';

describe('ImgGalleryProductsComponent', () => {
  let component: ImgGalleryProductsComponent;
  let fixture: ComponentFixture<ImgGalleryProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgGalleryProductsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgGalleryProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
