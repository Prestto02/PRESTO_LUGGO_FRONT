import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InformativeAdnComponent } from './informative-adn.component';

describe('InformativeAdnComponent', () => {
  let component: InformativeAdnComponent;
  let fixture: ComponentFixture<InformativeAdnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InformativeAdnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(InformativeAdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
