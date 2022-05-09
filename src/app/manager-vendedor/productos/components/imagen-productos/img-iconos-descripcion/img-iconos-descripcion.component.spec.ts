import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgIconosDescripcionComponent } from './img-iconos-descripcion.component';

describe('ImgIconosDescripcionComponent', () => {
  let component: ImgIconosDescripcionComponent;
  let fixture: ComponentFixture<ImgIconosDescripcionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgIconosDescripcionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgIconosDescripcionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
