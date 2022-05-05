import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImagenProductosComponent } from './imagen-productos.component';

describe('ImagenProductosComponent', () => {
  let component: ImagenProductosComponent;
  let fixture: ComponentFixture<ImagenProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImagenProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImagenProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
