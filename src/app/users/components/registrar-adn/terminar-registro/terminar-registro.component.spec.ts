import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminarRegistroComponent } from './terminar-registro.component';

describe('TerminarRegistroComponent', () => {
  let component: TerminarRegistroComponent;
  let fixture: ComponentFixture<TerminarRegistroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminarRegistroComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminarRegistroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
