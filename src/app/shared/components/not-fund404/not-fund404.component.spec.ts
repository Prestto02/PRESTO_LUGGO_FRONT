import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NotFund404Component } from './not-fund404.component';

describe('NotFund404Component', () => {
  let component: NotFund404Component;
  let fixture: ComponentFixture<NotFund404Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NotFund404Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NotFund404Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
