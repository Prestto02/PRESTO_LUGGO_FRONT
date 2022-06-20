import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FooterPuerttoComponent } from './footer-puertto.component';

describe('FooterPuerttoComponent', () => {
  let component: FooterPuerttoComponent;
  let fixture: ComponentFixture<FooterPuerttoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FooterPuerttoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FooterPuerttoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
