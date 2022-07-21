import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPedidosComponent } from '../list-pedidos.component';
import { ItemPedidosComponent } from '../item-pedidos/item-pedidos.component';
import { ListaPedidosRoutingModule } from './List-pedidos-routing.module';
import { MenuIndexModule } from '../../index/menu-index/module/menu-index.module';
import { FooterIndexModule } from '../../index/footer-index/module/footer-index.module';
import { TablePedidosComponent } from '../table-pedidos/table-pedidos.component';
import { NgxPaginationModule } from 'ngx-pagination';
import { ColorBadgeDirective } from '../table-pedidos/directive/color-badge.directive';

@NgModule({
  declarations: [
    ListPedidosComponent,
    ItemPedidosComponent,
    TablePedidosComponent,
    ColorBadgeDirective,
  ],
  imports: [
    CommonModule,
    ListaPedidosRoutingModule,
    NgxPaginationModule,
    MenuIndexModule,
    FooterIndexModule,
  ],
})
export class ListPedidosModule {}
