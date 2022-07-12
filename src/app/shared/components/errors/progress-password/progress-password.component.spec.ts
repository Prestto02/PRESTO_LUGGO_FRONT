import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProgressPasswordComponent } from './progress-password.component';

describe('ProgressPasswordComponent', () => {
  let component: ProgressPasswordComponent;
  let fixture: ComponentFixture<ProgressPasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProgressPasswordComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProgressPasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
