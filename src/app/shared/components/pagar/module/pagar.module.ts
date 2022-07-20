import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagarRoutingModule } from './pagar-routing.module';
import { MenuIndexModule } from '../../index/menu-index/module/menu-index.module';
import { FooterIndexModule } from '../../index/footer-index/module/footer-index.module';
import { PagarComponent } from '../pagar.component';
import { FormularioPagarComponent } from '../formulario-pagar/formulario-pagar.component';
import { BaseFormPagar } from '../formulario-pagar/models/BaseFormPagar';
import { ReactiveFormsModule } from '@angular/forms';
import { VerificarPaymentsComponent } from '../verificar-payments/verificar-payments.component';

import { ErrorsExtensionsModule } from '../../errors/errors-module.module';
import { UbicacionProductComponent } from '../formulario-pagar/ubicacion-product/ubicacion-product.component';
import { ImportsUbicacion } from '../formulario-pagar/ubicacion-product/ubicacion-mapa.module';

@NgModule({
  declarations: [
    PagarComponent,
    FormularioPagarComponent,
    VerificarPaymentsComponent,
    UbicacionProductComponent,
  ],
  imports: [
    CommonModule,
    PagarRoutingModule,
    ImportsUbicacion,
    ReactiveFormsModule,
    MenuIndexModule,
    ErrorsExtensionsModule,
    FooterIndexModule,
  ],
  providers: [BaseFormPagar],
})
export class PagarModule {}
