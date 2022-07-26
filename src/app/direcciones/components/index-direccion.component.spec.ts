import { ComponentFixture, TestBed } from '@angular/core/testing';

import { IndexDireccionComponent } from './index-direccion.component';

describe('IndexDireccionComponent', () => {
  let component: IndexDireccionComponent;
  let fixture: ComponentFixture<IndexDireccionComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ IndexDireccionComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(IndexDireccionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
