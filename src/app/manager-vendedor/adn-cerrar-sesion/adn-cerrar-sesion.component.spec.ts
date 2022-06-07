import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdnCerrarSesionComponent } from './adn-cerrar-sesion.component';

describe('AdnCerrarSesionComponent', () => {
  let component: AdnCerrarSesionComponent;
  let fixture: ComponentFixture<AdnCerrarSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdnCerrarSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdnCerrarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
