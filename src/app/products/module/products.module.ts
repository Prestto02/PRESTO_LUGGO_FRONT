import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductsRoutingModule } from './products-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { BaseFormProducts } from '../models/BaseformProduct';
import { ProductsComponent } from '../components/products.component';
import { ErrorsExtensionsModule } from 'src/app/shared/components/errors/errors-module.module';
import { CreateProductsComponent } from '../components/create-products/create-products.component';
import { AlifeFileToBase64Module } from 'alife-file-to-base64';

@NgModule({
  declarations: [ProductsComponent, CreateProductsComponent],
  imports: [
    CommonModule,
    ProductsRoutingModule,
    ReactiveFormsModule,
    ErrorsExtensionsModule,
    AlifeFileToBase64Module,
  ],
  providers: [BaseFormProducts],
})
export class ProductsModule {}
