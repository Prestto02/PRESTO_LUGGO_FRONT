import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutocompletadoProductosComponent } from './autocompletado-productos.component';

describe('AutocompletadoProductosComponent', () => {
  let component: AutocompletadoProductosComponent;
  let fixture: ComponentFixture<AutocompletadoProductosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AutocompletadoProductosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AutocompletadoProductosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
