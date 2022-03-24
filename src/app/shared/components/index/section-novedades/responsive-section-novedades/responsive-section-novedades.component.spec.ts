import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveSectionNovedadesComponent } from './responsive-section-novedades.component';

describe('ResponsiveSectionNovedadesComponent', () => {
  let component: ResponsiveSectionNovedadesComponent;
  let fixture: ComponentFixture<ResponsiveSectionNovedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveSectionNovedadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveSectionNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
