import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SparklinesLinealComponent } from './sparklines-lineal.component';

describe('SparklinesLinealComponent', () => {
  let component: SparklinesLinealComponent;
  let fixture: ComponentFixture<SparklinesLinealComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SparklinesLinealComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SparklinesLinealComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
