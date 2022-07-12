import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestionDimensionComponent } from './gestion-dimension.component';

describe('GestionDimensionComponent', () => {
  let component: GestionDimensionComponent;
  let fixture: ComponentFixture<GestionDimensionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestionDimensionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestionDimensionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
