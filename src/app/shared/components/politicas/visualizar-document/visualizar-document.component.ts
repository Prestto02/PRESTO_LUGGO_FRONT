import { Component, OnChanges, Input, SimpleChanges } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';

@Component({
  selector: 'app-visualizar-document',
  templateUrl: './visualizar-document.component.html',
  styleUrls: ['./visualizar-document.component.css'],
})
export class VisualizarDocumentComponent implements OnChanges {
  @Input('visualizarPDF') visualizarPDF: string = '';
  visualizar: string = RepositorioImg.urlRepositorio;
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.visualizarPDF.currentValue != changes.visualizarPDF.previousValue
    ) {
      this.visualizarPDF = changes.visualizarPDF.currentValue;
    }
  }
}
