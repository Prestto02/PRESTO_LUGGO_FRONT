import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionAdnComponent } from './seccion-adn.component';

describe('SeccionAdnComponent', () => {
  let component: SeccionAdnComponent;
  let fixture: ComponentFixture<SeccionAdnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionAdnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SeccionAdnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
