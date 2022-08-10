import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListItemsDeseosComponent } from './list-items-deseos.component';

describe('ListItemsDeseosComponent', () => {
  let component: ListItemsDeseosComponent;
  let fixture: ComponentFixture<ListItemsDeseosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListItemsDeseosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListItemsDeseosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
