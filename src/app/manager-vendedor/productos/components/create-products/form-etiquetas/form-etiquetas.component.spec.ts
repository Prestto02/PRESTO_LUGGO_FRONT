import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormEtiquetasComponent } from './form-etiquetas.component';

describe('FormEtiquetasComponent', () => {
  let component: FormEtiquetasComponent;
  let fixture: ComponentFixture<FormEtiquetasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormEtiquetasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormEtiquetasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
