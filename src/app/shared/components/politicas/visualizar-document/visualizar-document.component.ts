import { Component, OnInit, Input } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';

@Component({
  selector: 'app-visualizar-document',
  templateUrl: './visualizar-document.component.html',
  styleUrls: ['./visualizar-document.component.css'],
})
export class VisualizarDocumentComponent implements OnInit {
  @Input('visualizarPDF') visualizarPDF: any = '';
  visualizar: string = RepositorioImg.urlRepositorio;
  constructor() {}

  ngOnInit(): void {}
}
