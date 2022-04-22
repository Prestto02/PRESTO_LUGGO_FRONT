import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedProductsComponent } from '../list-products/shared-products.component';
import { InfiniteScrollModule } from 'ngx-infinite-scroll';

@NgModule({
  declarations: [SharedProductsComponent],
  imports: [CommonModule, InfiniteScrollModule],
  exports: [SharedProductsComponent],
})
export class SharedProductosModule {}
