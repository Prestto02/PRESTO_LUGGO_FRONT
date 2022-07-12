import { Component, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';

@Component({
  selector: 'app-seccion-tercera',
  templateUrl: './seccion-tercera.component.html',
  styleUrls: ['./seccion-tercera.component.css'],
})
export class SeccionTerceraComponent implements OnInit {
  img1 = `${RepositorioImg.urlRepositorio}img/IMÁGENES/quienes-somos/Rectangle-3.png`;
  constructor() {}

  ngOnInit(): void {}
}
