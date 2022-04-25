import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuCategoriasComponent } from './sub-menu-cosmeticos.component';

describe('SubMenuCosmeticosComponent', () => {
  let component: SubMenuCategoriasComponent;
  let fixture: ComponentFixture<SubMenuCategoriasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SubMenuCategoriasComponent],
    }).compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuCategoriasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
