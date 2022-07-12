import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IconsCarsDesireComponent } from './icons-cars-desire.component';

describe('IconsCarsDesireComponent', () => {
  let component: IconsCarsDesireComponent;
  let fixture: ComponentFixture<IconsCarsDesireComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IconsCarsDesireComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IconsCarsDesireComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
