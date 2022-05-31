import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionProductosTerceraComponent } from './configuracion-productos-tercera.component';

describe('ConfiguracionProductosTerceraComponent', () => {
  let component: ConfiguracionProductosTerceraComponent;
  let fixture: ComponentFixture<ConfiguracionProductosTerceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionProductosTerceraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionProductosTerceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
