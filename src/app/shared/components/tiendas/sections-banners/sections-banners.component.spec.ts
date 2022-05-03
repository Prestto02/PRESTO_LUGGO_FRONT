import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionsBannersComponent } from './sections-banners.component';

describe('SectionsBannersComponent', () => {
  let component: SectionsBannersComponent;
  let fixture: ComponentFixture<SectionsBannersComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SectionsBannersComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionsBannersComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
