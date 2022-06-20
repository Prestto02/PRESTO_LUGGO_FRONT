import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarouselSharedComponent } from './carousel-shared.component';

describe('CarouselSharedComponent', () => {
  let component: CarouselSharedComponent;
  let fixture: ComponentFixture<CarouselSharedComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarouselSharedComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarouselSharedComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
