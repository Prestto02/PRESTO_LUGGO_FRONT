import { Component, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';

@Component({
  selector: 'app-seccion-secundaria',
  templateUrl: './seccion-secundaria.component.html',
  styleUrls: ['./seccion-secundaria.component.css'],
})
export class SeccionSecundariaComponent implements OnInit {
  img1 = `${RepositorioImg.urlRepositorio}/img/IMÁGENES/quienes-somos/Rectangle.png`;
  img2 = `${RepositorioImg.urlRepositorio}/img/IMÁGENES/quienes-somos/Rectangle-1.png`;

  constructor() {}

  ngOnInit(): void {}
}
