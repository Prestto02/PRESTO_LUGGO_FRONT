import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EditorPoliticsComponent } from './editor-politics.component';

describe('EditorPoliticsComponent', () => {
  let component: EditorPoliticsComponent;
  let fixture: ComponentFixture<EditorPoliticsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EditorPoliticsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EditorPoliticsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
