import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCarouselTelephoneComponent } from './section-carousel-telephone.component';

describe('SectionCarouselTelephoneComponent', () => {
  let component: SectionCarouselTelephoneComponent;
  let fixture: ComponentFixture<SectionCarouselTelephoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCarouselTelephoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCarouselTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
