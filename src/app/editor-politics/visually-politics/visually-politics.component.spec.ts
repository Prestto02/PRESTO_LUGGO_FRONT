import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisuallyPoliticsComponent } from './visually-politics.component';

describe('VisuallyPoliticsComponent', () => {
  let component: VisuallyPoliticsComponent;
  let fixture: ComponentFixture<VisuallyPoliticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisuallyPoliticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisuallyPoliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
