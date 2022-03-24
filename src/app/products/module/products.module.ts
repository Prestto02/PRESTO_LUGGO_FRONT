import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseFormProducts } from '../models/BaseformProduct';
import { ProductsComponent } from '../components/products.component';
import { ErrorsExtensionsModule } from 'src/app/shared/components/errors/errors-module.module';
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
