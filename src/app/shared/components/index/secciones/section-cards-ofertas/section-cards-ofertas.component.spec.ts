import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionCardsOfertasComponent } from './section-cards-ofertas.component';

describe('SectionCardsOfertasComponent', () => {
  let component: SectionCardsOfertasComponent;
  let fixture: ComponentFixture<SectionCardsOfertasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionCardsOfertasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionCardsOfertasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
