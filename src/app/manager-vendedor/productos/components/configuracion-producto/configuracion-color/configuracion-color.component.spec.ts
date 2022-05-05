import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConfiguracionColorComponent } from './configuracion-color.component';

describe('ConfiguracionColorComponent', () => {
  let component: ConfiguracionColorComponent;
  let fixture: ComponentFixture<ConfiguracionColorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConfiguracionColorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConfiguracionColorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
