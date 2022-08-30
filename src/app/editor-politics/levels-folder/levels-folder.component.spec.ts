import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LevelsFolderComponent } from './levels-folder.component';

describe('LevelsFolderComponent', () => {
  let component: LevelsFolderComponent;
  let fixture: ComponentFixture<LevelsFolderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LevelsFolderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LevelsFolderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
