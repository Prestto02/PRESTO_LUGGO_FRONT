import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CabezeraCentralComponent } from './cabezera-central.component';

describe('CabezeraCentralComponent', () => {
  let component: CabezeraCentralComponent;
  let fixture: ComponentFixture<CabezeraCentralComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CabezeraCentralComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CabezeraCentralComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
