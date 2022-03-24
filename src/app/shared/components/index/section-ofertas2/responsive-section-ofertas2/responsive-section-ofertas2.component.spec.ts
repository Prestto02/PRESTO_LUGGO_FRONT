import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveSectionOfertas2Component } from './responsive-section-ofertas2.component';

describe('ResponsiveSectionOfertas2Component', () => {
  let component: ResponsiveSectionOfertas2Component;
  let fixture: ComponentFixture<ResponsiveSectionOfertas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveSectionOfertas2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveSectionOfertas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
