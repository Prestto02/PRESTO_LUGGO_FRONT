import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionServiciosComponent } from './section-servicios.component';

describe('SectionServiciosComponent', () => {
  let component: SectionServiciosComponent;
  let fixture: ComponentFixture<SectionServiciosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionServiciosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionServiciosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
