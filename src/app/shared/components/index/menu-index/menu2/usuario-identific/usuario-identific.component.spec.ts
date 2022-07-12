import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UsuarioIdentificComponent } from './usuario-identific.component';

describe('UsuarioIdentificComponent', () => {
  let component: UsuarioIdentificComponent;
  let fixture: ComponentFixture<UsuarioIdentificComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ UsuarioIdentificComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(UsuarioIdentificComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
