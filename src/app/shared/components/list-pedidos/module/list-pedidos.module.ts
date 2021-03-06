import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPedidosComponent } from '../list-pedidos.component';
import { ItemPedidosComponent } from '../item-pedidos/item-pedidos.component';
import { ListaPedidosRoutingModule } from './List-pedidos-routing.module';
import { MenuIndexModule } from '../../index/menu-index/module/menu-index.module';
import { FooterIndexModule } from '../../index/footer-index/module/footer-index.module';

@NgModule({
  declarations: [ListPedidosComponent, ItemPedidosComponent],
  imports: [
    CommonModule,
    ListaPedidosRoutingModule,
    MenuIndexModule,
    FooterIndexModule,
  ],
})
export class ListPedidosModule {}
