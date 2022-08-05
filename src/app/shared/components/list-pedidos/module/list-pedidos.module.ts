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
import { PlantillaAdnClientComponent } from '../plantilla-adn-client/plantilla-adn-client.component';
import { SearchBuyPipe } from '../table-pedidos/pipe/search-buy.pipe';
import { ReactiveFormsModule } from '@angular/forms';
import { FormSearchBuy } from '../models/FormSearchBuy';

@NgModule({
  declarations: [
    ListPedidosComponent,
    ItemPedidosComponent,
    TablePedidosComponent,
    ColorBadgeDirective,
    PlantillaAdnClientComponent,
    SearchBuyPipe,
  ],
  imports: [
    CommonModule,
    ListaPedidosRoutingModule,
    NgxPaginationModule,
    ReactiveFormsModule,
    MenuIndexModule,
    FooterIndexModule,
  ],
  providers: [FormSearchBuy],
})
export class ListPedidosModule {}
