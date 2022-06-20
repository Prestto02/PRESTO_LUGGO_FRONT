import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ButtonAddOrListComponent } from './button-add-or-list.component';

describe('ButtonAddOrListComponent', () => {
  let component: ButtonAddOrListComponent;
  let fixture: ComponentFixture<ButtonAddOrListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ButtonAddOrListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ButtonAddOrListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
