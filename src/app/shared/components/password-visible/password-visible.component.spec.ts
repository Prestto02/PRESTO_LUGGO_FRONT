import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordVisibleComponent } from './password-visible.component';

describe('PasswordVisibleComponent', () => {
  let component: PasswordVisibleComponent;
  let fixture: ComponentFixture<PasswordVisibleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PasswordVisibleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PasswordVisibleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
