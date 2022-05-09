import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ImgIconosComponent } from './img-iconos.component';

describe('ImgIconosComponent', () => {
  let component: ImgIconosComponent;
  let fixture: ComponentFixture<ImgIconosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ImgIconosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ImgIconosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
