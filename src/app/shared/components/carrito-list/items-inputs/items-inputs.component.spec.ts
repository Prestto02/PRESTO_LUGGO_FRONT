import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemsInputsComponent } from './items-inputs.component';

describe('ItemsInputsComponent', () => {
  let component: ItemsInputsComponent;
  let fixture: ComponentFixture<ItemsInputsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemsInputsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemsInputsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
