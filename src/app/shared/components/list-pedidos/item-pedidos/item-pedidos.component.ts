import { Component, Input, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { ListPedidosUsers } from '../models/ListPedidos.models';

@Component({
  selector: 'app-item-pedidos',
  templateUrl: './item-pedidos.component.html',
  styleUrls: ['./item-pedidos.component.css'],
})
export class ItemPedidosComponent implements OnInit {
  @Input('listPedidos') listPedidos: ListPedidosUsers[] | null = null;
  imgIcons = `${RepositorioImg.urlRepositorio}`;
  imgIconsTienda = `${RepositorioImg.urlRepositorio}img/IMÁGENES/img-iconos/shop.png`;

  constructor() {}

  ngOnInit(): void {}
}
