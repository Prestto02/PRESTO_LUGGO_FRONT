import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TusPagosComponent } from './tus-pagos.component';

describe('TusPagosComponent', () => {
  let component: TusPagosComponent;
  let fixture: ComponentFixture<TusPagosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TusPagosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TusPagosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
