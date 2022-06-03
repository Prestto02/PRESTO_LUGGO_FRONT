import { Component, OnInit } from '@angular/core';
import { RepositorioImg } from '../shared/helpers/RepositorioImg';

@Component({
  selector: 'app-manager-vendedor',
  templateUrl: './manager-vendedor.component.html',
  styleUrls: ['./manager-vendedor.component.css'],
})
export class ManagerVendedorComponent implements OnInit {
  imagenPuerto = `${RepositorioImg.urlRepositorio}img/IMÁGENES/puerttoImg.png`;
  imgEtiqueta = `${RepositorioImg.urlRepositorio}img/IMÁGENES/etiquetasAdn.png`;
  imgBilletera = `${RepositorioImg.urlRepositorio}img/IMÁGENES/billeteraAdn.png`;
  constructor() {}

  ngOnInit(): void {}
}
