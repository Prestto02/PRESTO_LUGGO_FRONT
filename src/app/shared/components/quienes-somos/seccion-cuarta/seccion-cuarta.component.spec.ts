import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionCuartaComponent } from './seccion-cuarta.component';

describe('SeccionCuartaComponent', () => {
  let component: SeccionCuartaComponent;
  let fixture: ComponentFixture<SeccionCuartaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionCuartaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionCuartaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
