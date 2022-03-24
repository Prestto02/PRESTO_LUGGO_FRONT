import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionOfertasComponent } from './section-ofertas.component';

describe('SectionOfertasComponent', () => {
  let component: SectionOfertasComponent;
  let fixture: ComponentFixture<SectionOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionOfertasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
