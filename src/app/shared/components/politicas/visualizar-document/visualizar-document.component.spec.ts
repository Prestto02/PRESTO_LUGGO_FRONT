import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualizarDocumentComponent } from './visualizar-document.component';

describe('VisualizarDocumentComponent', () => {
  let component: VisualizarDocumentComponent;
  let fixture: ComponentFixture<VisualizarDocumentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualizarDocumentComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(VisualizarDocumentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
