import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SideBarIzquierdaComponent } from './side-bar-izquierda.component';

describe('SideBarIzquierdaComponent', () => {
  let component: SideBarIzquierdaComponent;
  let fixture: ComponentFixture<SideBarIzquierdaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SideBarIzquierdaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SideBarIzquierdaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
