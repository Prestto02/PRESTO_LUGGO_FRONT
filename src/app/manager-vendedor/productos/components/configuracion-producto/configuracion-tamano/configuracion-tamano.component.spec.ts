import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionTamanoComponent } from './configuracion-tamano.component';

describe('ConfiguracionTamanoComponent', () => {
  let component: ConfiguracionTamanoComponent;
  let fixture: ComponentFixture<ConfiguracionTamanoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionTamanoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionTamanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
