import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { Menu2Component } from '../../menu-index/menu2/menu2.component';


import { SectionCarouselComponent } from './section-carousel.component';

describe('SectionCarouselComponent', () => {
  let component: SectionCarouselComponent;
  let fixture: ComponentFixture<SectionCarouselComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RouterTestingModule,HttpClientTestingModule],
      declarations: [SectionCarouselComponent, Menu2Component],
      providers: [Menu2Component],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCarouselComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
