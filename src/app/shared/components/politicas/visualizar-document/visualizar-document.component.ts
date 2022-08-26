import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-visualizar-document',
  templateUrl: './visualizar-document.component.html',
  styleUrls: ['./visualizar-document.component.css'],
})
export class VisualizarDocumentComponent implements OnInit {
  @Input('visualizarPDF') visualizarPDF: string =
    'https://ecovitali.presttoapp.net/Puertto/Calidad/Repositorio/Documents/Librerias/Documento2.pdf';
  visualizar: string =
    'https://ecovitali.presttoapp.net/Puertto/Calidad/Repositorio/Documents/Librerias/Documento2.pdf';
  constructor() {}

  ngOnInit(): void {}
}
