import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormularioPagarComponent } from './formulario-pagar.component';

describe('FormularioPagarComponent', () => {
  let component: FormularioPagarComponent;
  let fixture: ComponentFixture<FormularioPagarComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormularioPagarComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormularioPagarComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
