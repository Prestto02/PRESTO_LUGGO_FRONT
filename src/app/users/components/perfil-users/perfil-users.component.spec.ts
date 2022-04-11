import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PerfilUsersComponent } from './perfil-users.component';

describe('PerfilUsersComponent', () => {
  let component: PerfilUsersComponent;
  let fixture: ComponentFixture<PerfilUsersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PerfilUsersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PerfilUsersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
