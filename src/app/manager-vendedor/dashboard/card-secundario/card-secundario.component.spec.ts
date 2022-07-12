import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardSecundarioComponent } from './card-secundario.component';

describe('CardSecundarioComponent', () => {
  let component: CardSecundarioComponent;
  let fixture: ComponentFixture<CardSecundarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardSecundarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardSecundarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
