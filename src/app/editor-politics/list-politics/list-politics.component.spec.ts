import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListPoliticsComponent } from './list-politics.component';

describe('ListPoliticsComponent', () => {
  let component: ListPoliticsComponent;
  let fixture: ComponentFixture<ListPoliticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListPoliticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ListPoliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
