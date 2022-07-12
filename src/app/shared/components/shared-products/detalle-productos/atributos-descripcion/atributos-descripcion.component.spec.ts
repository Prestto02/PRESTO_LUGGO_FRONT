import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtributosDescripcionComponent } from './atributos-descripcion.component';

describe('AtributosDescripcionComponent', () => {
  let component: AtributosDescripcionComponent;
  let fixture: ComponentFixture<AtributosDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtributosDescripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtributosDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
