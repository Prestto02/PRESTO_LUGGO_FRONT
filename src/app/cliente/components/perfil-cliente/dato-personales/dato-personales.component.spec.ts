import { ComponentFixture, TestBed } from '@angular/core/testing';

import { DatoPersonalesComponent } from './dato-personales.component';

describe('DatoPersonalesComponent', () => {
  let component: DatoPersonalesComponent;
  let fixture: ComponentFixture<DatoPersonalesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DatoPersonalesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DatoPersonalesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
