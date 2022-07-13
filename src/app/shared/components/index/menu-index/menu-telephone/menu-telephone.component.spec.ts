import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTelephoneComponent } from './menu-telephone.component';

describe('MenuTelephoneComponent', () => {
  let component: MenuTelephoneComponent;
  let fixture: ComponentFixture<MenuTelephoneComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTelephoneComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(MenuTelephoneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
