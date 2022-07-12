import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemsCuentaComponent } from './list-items-cuenta.component';

describe('ListItemsCuentaComponent', () => {
  let component: ListItemsCuentaComponent;
  let fixture: ComponentFixture<ListItemsCuentaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemsCuentaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemsCuentaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
