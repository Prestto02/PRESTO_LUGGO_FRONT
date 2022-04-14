import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { FormBuilder, ReactiveFormsModule } from '@angular/forms';
import { ToastConfig } from 'src/app/shared/Toasts/ToastsConfig';

import { CreateProductsComponent } from './create-products.component';

describe('CreateProductsComponent', () => {
  let component: CreateProductsComponent;
  let fixture: ComponentFixture<CreateProductsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [HttpClientTestingModule, ReactiveFormsModule, ToastConfig],
      declarations: [CreateProductsComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreateProductsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
