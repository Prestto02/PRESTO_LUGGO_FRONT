import { Component, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';

@Component({
  selector: 'app-seccion-princpial',
  templateUrl: './seccion-princpial.component.html',
  styleUrls: ['./seccion-princpial.component.css'],
})
export class SeccionPrincpialComponent implements OnInit {
  imgTop1 = `${RepositorioImg.urlRepositorio}img/IMÁGENES/quienes-somos/LuggoNegocio 1.png`;
  constructor() {}

  ngOnInit(): void {}
}
