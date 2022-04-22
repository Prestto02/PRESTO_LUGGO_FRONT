import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionSecundariaComponent } from './seccion-secundaria.component';

describe('SeccionSecundariaComponent', () => {
  let component: SeccionSecundariaComponent;
  let fixture: ComponentFixture<SeccionSecundariaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionSecundariaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionSecundariaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
