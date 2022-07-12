import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerificarPaymentsComponent } from './verificar-payments.component';

describe('VerificarPaymentsComponent', () => {
  let component: VerificarPaymentsComponent;
  let fixture: ComponentFixture<VerificarPaymentsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerificarPaymentsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerificarPaymentsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
