import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-visually-politics',
  templateUrl: './visually-politics.component.html',
  styleUrls: ['./visually-politics.component.css'],
})
export class VisuallyPoliticsComponent implements OnInit {
  /*   pdfSrc: any = {
    url: 'https://ecovitali.presttoapp.net/Puertto/Calidad/Repositorio/Documents/Librerias/Documento2.pdf',
    withCredentials: true,
  };
 */
  pdfSrc: string =
    'https://ecovitali.presttoapp.net/Puertto/Calidad/Repositorio/Documents/Librerias/Documento2.pdf';
  constructor() {}

  ngOnInit(): void {}
}
