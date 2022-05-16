import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionAtributosComponent } from './configuracion-atributos.component';

describe('ConfiguracionAtributosComponent', () => {
  let component: ConfiguracionAtributosComponent;
  let fixture: ComponentFixture<ConfiguracionAtributosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionAtributosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionAtributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
