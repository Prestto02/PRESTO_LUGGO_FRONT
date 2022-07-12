import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LogisticaProductoComponent } from './logistica-producto.component';

describe('LogisticaProductoComponent', () => {
  let component: LogisticaProductoComponent;
  let fixture: ComponentFixture<LogisticaProductoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LogisticaProductoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LogisticaProductoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
