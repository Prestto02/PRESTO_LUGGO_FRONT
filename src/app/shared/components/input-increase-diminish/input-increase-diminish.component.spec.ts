import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InputIncreaseDiminishComponent } from './input-increase-diminish.component';

describe('InputIncreaseDiminishComponent', () => {
  let component: InputIncreaseDiminishComponent;
  let fixture: ComponentFixture<InputIncreaseDiminishComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InputIncreaseDiminishComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InputIncreaseDiminishComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
