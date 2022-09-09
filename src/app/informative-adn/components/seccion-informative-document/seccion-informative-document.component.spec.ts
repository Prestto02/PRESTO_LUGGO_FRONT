import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SeccionInformativeDocumentComponent } from './seccion-informative-document.component';

describe('SeccionInformativeDocumentComponent', () => {
  let component: SeccionInformativeDocumentComponent;
  let fixture: ComponentFixture<SeccionInformativeDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SeccionInformativeDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SeccionInformativeDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
