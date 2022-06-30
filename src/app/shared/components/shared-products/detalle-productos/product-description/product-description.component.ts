import { Component, Input, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css'],
})
export class ProductDescriptionComponent implements OnInit {
  @Input('productoObjeto') productoObjeto: any | null = null;

  tienda = `${RepositorioImg.urlRepositorio}img/IMÁGENES/icons-detalle-products/tienda.png`;
  caja = `${RepositorioImg.urlRepositorio}img/IMÁGENES/icons-detalle-products/caja.png`;
  seguridad = `${RepositorioImg.urlRepositorio}img/IMÁGENES/icons-detalle-products/seguridad.png`;

  constructor() {}

  ngOnInit(): void {}
}
