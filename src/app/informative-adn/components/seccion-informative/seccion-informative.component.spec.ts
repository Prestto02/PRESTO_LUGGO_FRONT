import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionInformativeComponent } from './seccion-informative.component';

describe('SeccionInformativeComponent', () => {
  let component: SeccionInformativeComponent;
  let fixture: ComponentFixture<SeccionInformativeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionInformativeComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionInformativeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
