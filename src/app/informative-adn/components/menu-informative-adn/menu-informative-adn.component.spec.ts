import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuInformativeAdnComponent } from './menu-informative-adn.component';

describe('MenuInformativeAdnComponent', () => {
  let component: MenuInformativeAdnComponent;
  let fixture: ComponentFixture<MenuInformativeAdnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuInformativeAdnComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuInformativeAdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
