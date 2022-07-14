import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SegundoEditComponent } from './segundo-edit.component';

describe('SegundoEditComponent', () => {
  let component: SegundoEditComponent;
  let fixture: ComponentFixture<SegundoEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SegundoEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SegundoEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
