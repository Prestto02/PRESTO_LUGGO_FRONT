import { Component, Input, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { ListPedidosUsers } from '../models/ListPedidos.models';

@Component({
  selector: 'app-item-pedidos',
  templateUrl: './item-pedidos.component.html',
  styleUrls: ['./item-pedidos.component.css'],
})
export class ItemPedidosComponent implements OnInit {
  @Input('listPedidos') listPedidos: ReadonlyArray<ListPedidosUsers> = [];
  imgIcons = `${RepositorioImg.urlRepositorio}`;
  imgIconsTienda = `${RepositorioImg.urlRepositorio}img/IMÁGENES/img-iconos/shop.png`;
  itemsProducts: number = 0;
  totalProducts: number = 0;
  constructor() {}
  ngOnInit(): void {
    this.getTotalItemsProducts();
  }
  getTotalItemsProducts(): void {
    this.totalProducts = this.listPedidos.length;
    this.listPedidos?.map((listPedidos: ListPedidosUsers) => {
      listPedidos.detalle_venta.map((res) => {
        this.itemsProducts = res.item + this.itemsProducts;
      });
    });
  }
}
