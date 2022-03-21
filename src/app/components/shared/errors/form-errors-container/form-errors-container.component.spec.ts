import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormErrorsContainerComponent } from './form-errors-container.component';

describe('FormErrorsContainerComponent', () => {
  let component: FormErrorsContainerComponent;
  let fixture: ComponentFixture<FormErrorsContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FormErrorsContainerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FormErrorsContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
