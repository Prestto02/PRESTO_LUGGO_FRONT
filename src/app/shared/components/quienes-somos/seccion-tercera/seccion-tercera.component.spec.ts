import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionTerceraComponent } from './seccion-tercera.component';

describe('SeccionTerceraComponent', () => {
  let component: SeccionTerceraComponent;
  let fixture: ComponentFixture<SeccionTerceraComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionTerceraComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionTerceraComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
