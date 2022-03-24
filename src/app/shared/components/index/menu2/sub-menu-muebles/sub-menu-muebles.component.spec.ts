import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuMueblesComponent } from './sub-menu-muebles.component';

describe('SubMenuMueblesComponent', () => {
  let component: SubMenuMueblesComponent;
  let fixture: ComponentFixture<SubMenuMueblesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMenuMueblesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuMueblesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
