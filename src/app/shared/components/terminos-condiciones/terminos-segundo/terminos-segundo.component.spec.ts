import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TerminosSegundoComponent } from './terminos-segundo.component';

describe('TerminosSegundoComponent', () => {
  let component: TerminosSegundoComponent;
  let fixture: ComponentFixture<TerminosSegundoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TerminosSegundoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(TerminosSegundoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
