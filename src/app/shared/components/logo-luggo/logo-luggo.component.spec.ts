import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogoLuggoComponent } from './logo-luggo.component';

describe('LogoLuggoComponent', () => {
  let component: LogoLuggoComponent;
  let fixture: ComponentFixture<LogoLuggoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogoLuggoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogoLuggoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
