import { Component, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { arrayTable } from './ArrayTableInformative';

@Component({
  selector: 'app-seccion-informative-document',
  templateUrl: './seccion-informative-document.component.html',
  styleUrls: ['./seccion-informative-document.component.css'],
})
export class SeccionInformativeDocumentComponent implements OnInit {
  urlImg: string = `${RepositorioImg.urlRepositorio}img/IMÁGENES/img-informative-adn`;
  arrayTableInformative = arrayTable;
  constructor() {}

  ngOnInit(): void {}
}
