import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResponsiveSectionCarouselComponent } from './responsive-section-carousel.component';

describe('ResponsiveSectionCarouselComponent', () => {
  let component: ResponsiveSectionCarouselComponent;
  let fixture: ComponentFixture<ResponsiveSectionCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResponsiveSectionCarouselComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResponsiveSectionCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
