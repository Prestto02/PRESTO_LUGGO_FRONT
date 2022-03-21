import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsComponent } from '../products.component';
import { ProductsRoutingModule } from './products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseFormProducts } from '../models/BaseformProduct';
import { ErrorsExtensionsModule } from '../../shared/errors/errors-module.module';
@NgModule({
  declarations: [ProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    ErrorsExtensionsModule,
  ],
  providers: [BaseFormProducts],
})
export class ProductsModule {}
