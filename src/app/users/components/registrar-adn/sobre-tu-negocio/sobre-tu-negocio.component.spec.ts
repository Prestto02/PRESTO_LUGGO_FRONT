import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SobreTuNegocioComponent } from './sobre-tu-negocio.component';

describe('SobreTuNegocioComponent', () => {
  let component: SobreTuNegocioComponent;
  let fixture: ComponentFixture<SobreTuNegocioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SobreTuNegocioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SobreTuNegocioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
