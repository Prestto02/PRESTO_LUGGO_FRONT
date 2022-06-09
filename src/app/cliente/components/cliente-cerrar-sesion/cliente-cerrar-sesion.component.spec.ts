import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ClienteCerrarSesionComponent } from './cliente-cerrar-sesion.component';

describe('ClienteCerrarSesionComponent', () => {
  let component: ClienteCerrarSesionComponent;
  let fixture: ComponentFixture<ClienteCerrarSesionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ClienteCerrarSesionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ClienteCerrarSesionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
