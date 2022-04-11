import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonsLoadComponent } from './buttons-load.component';

describe('ButtonsLoadComponent', () => {
  let component: ButtonsLoadComponent;
  let fixture: ComponentFixture<ButtonsLoadComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonsLoadComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonsLoadComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
