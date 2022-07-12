import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesAyudaComponent } from './mensajes-ayuda.component';

describe('MensajesAyudaComponent', () => {
  let component: MensajesAyudaComponent;
  let fixture: ComponentFixture<MensajesAyudaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajesAyudaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesAyudaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
