import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PositionStripperComponent } from './position-stripper.component';

describe('PositionStripperComponent', () => {
  let component: PositionStripperComponent;
  let fixture: ComponentFixture<PositionStripperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PositionStripperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PositionStripperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
