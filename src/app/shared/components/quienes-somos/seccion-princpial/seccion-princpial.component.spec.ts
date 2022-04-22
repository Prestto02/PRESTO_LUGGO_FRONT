import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionPrincpialComponent } from './seccion-princpial.component';

describe('SeccionPrincpialComponent', () => {
  let component: SeccionPrincpialComponent;
  let fixture: ComponentFixture<SeccionPrincpialComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionPrincpialComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionPrincpialComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
