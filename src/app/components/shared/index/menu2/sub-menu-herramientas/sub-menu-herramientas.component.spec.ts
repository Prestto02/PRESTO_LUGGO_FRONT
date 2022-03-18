import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SubMenuHerramientasComponent } from './sub-menu-herramientas.component';

describe('SubMenuHerramientasComponent', () => {
  let component: SubMenuHerramientasComponent;
  let fixture: ComponentFixture<SubMenuHerramientasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SubMenuHerramientasComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SubMenuHerramientasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
