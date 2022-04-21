import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LinealGraficoComponent } from './lineal-grafico.component';

describe('LinealGraficoComponent', () => {
  let component: LinealGraficoComponent;
  let fixture: ComponentFixture<LinealGraficoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LinealGraficoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LinealGraficoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
