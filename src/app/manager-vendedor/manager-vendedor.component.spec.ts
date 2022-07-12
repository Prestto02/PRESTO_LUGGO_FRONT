import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManagerVendedorComponent } from './manager-vendedor.component';

describe('ManagerVendedorComponent', () => {
  let component: ManagerVendedorComponent;
  let fixture: ComponentFixture<ManagerVendedorComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManagerVendedorComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManagerVendedorComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
