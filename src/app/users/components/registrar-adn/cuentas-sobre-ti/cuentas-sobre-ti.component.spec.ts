import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CuentasSobreTiComponent } from './cuentas-sobre-ti.component';

describe('CuentasSobreTiComponent', () => {
  let component: CuentasSobreTiComponent;
  let fixture: ComponentFixture<CuentasSobreTiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CuentasSobreTiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CuentasSobreTiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
