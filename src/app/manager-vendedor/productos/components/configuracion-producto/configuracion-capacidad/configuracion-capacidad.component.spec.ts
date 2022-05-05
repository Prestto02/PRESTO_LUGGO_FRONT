import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionCapacidadComponent } from './configuracion-capacidad.component';

describe('ConfiguracionCapacidadComponent', () => {
  let component: ConfiguracionCapacidadComponent;
  let fixture: ComponentFixture<ConfiguracionCapacidadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionCapacidadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionCapacidadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
