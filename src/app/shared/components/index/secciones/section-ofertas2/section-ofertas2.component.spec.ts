import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOfertas2Component } from './section-ofertas2.component';

describe('SectionOfertas2Component', () => {
  let component: SectionOfertas2Component;
  let fixture: ComponentFixture<SectionOfertas2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOfertas2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOfertas2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
