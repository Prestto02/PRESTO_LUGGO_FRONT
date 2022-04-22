import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionQuintaComponent } from './seccion-quinta.component';

describe('SeccionQuintaComponent', () => {
  let component: SeccionQuintaComponent;
  let fixture: ComponentFixture<SeccionQuintaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionQuintaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionQuintaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
