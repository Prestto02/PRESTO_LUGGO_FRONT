import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SelectAtributosComponent } from './select-atributos.component';

describe('SelectAtributosComponent', () => {
  let component: SelectAtributosComponent;
  let fixture: ComponentFixture<SelectAtributosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SelectAtributosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SelectAtributosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
