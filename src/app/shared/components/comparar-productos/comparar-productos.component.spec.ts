import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompararProductosComponent } from './comparar-productos.component';

describe('CompararProductosComponent', () => {
  let component: CompararProductosComponent;
  let fixture: ComponentFixture<CompararProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompararProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompararProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
