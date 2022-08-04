import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosTerceroComponent } from './terminos-tercero.component';

describe('TerminosTerceroComponent', () => {
  let component: TerminosTerceroComponent;
  let fixture: ComponentFixture<TerminosTerceroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminosTerceroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminosTerceroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
