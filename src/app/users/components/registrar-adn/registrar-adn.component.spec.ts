import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RegistrarAdnComponent } from './registrar-adn.component';

describe('RegistrarAdnComponent', () => {
  let component: RegistrarAdnComponent;
  let fixture: ComponentFixture<RegistrarAdnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RegistrarAdnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RegistrarAdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
