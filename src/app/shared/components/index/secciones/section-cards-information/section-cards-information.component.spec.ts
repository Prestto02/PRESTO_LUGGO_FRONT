import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCardsInformationComponent } from './section-cards-information.component';

describe('SectionCardsInformationComponent', () => {
  let component: SectionCardsInformationComponent;
  let fixture: ComponentFixture<SectionCardsInformationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCardsInformationComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCardsInformationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
