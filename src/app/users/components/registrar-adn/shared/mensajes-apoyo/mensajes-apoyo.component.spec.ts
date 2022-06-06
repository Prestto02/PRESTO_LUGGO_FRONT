import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MensajesApoyoComponent } from './mensajes-apoyo.component';

describe('MensajesApoyoComponent', () => {
  let component: MensajesApoyoComponent;
  let fixture: ComponentFixture<MensajesApoyoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MensajesApoyoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MensajesApoyoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
