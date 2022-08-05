import { Component, Input } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { ListBuyUsers } from '../models/ListPedidos.models';

@Component({
  selector: 'app-item-pedidos',
  templateUrl: './item-pedidos.component.html',
  styleUrls: ['./item-pedidos.component.css'],
})
export class ItemPedidosComponent {
  @Input('listPedidos') listBuyDetails: Readonly<ListBuyUsers> | null = null;
  imgIcons = `${RepositorioImg.urlRepositorio}`;
  imgIconsTienda = `${RepositorioImg.urlRepositorio}img/IMÁGENES/img-iconos/shop.png`;
  itemsProducts: number = 0;
  totalProducts: number = 0;
  constructor() {}
}
