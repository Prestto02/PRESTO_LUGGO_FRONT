import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ErrorsServerComponent } from './errors-server.component';

describe('ErrorsServerComponent', () => {
  let component: ErrorsServerComponent;
  let fixture: ComponentFixture<ErrorsServerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ErrorsServerComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ErrorsServerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
