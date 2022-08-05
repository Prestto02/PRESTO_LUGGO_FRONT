import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosCuartoComponent } from './terminos-cuarto.component';

describe('TerminosCuartoComponent', () => {
  let component: TerminosCuartoComponent;
  let fixture: ComponentFixture<TerminosCuartoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminosCuartoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminosCuartoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
