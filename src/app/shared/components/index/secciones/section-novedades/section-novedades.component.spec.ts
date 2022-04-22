import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionNovedadesComponent } from './section-novedades.component';

describe('SectionNovedadesComponent', () => {
  let component: SectionNovedadesComponent;
  let fixture: ComponentFixture<SectionNovedadesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionNovedadesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionNovedadesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
