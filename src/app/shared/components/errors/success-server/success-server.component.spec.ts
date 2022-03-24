import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessServerComponent } from './success-server.component';

describe('SuccessServerComponent', () => {
  let component: SuccessServerComponent;
  let fixture: ComponentFixture<SuccessServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SuccessServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
