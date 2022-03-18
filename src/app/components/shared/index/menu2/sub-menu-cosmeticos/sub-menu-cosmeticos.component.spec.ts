import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuCosmeticosComponent } from './sub-menu-cosmeticos.component';

describe('SubMenuCosmeticosComponent', () => {
  let component: SubMenuCosmeticosComponent;
  let fixture: ComponentFixture<SubMenuCosmeticosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMenuCosmeticosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuCosmeticosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
