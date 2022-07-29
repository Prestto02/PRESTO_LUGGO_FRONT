import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IndexDireccionComponent } from '../components/index-direccion.component';
import { DireccionesRoutingModule } from './direcciones-routing.module';
import { MapaComponent } from '../components/mapa/mapa.component';
import { ListDireccionesComponent } from '../components/list-direcciones/list-direcciones.component';
import { ImportsUbicacion } from '../components/mapa/ubicacion-mapa.module';
import { MenuIndexModule } from 'src/app/shared/components/index/menu-index/module/menu-index.module';
import { FooterIndexModule } from 'src/app/shared/components/index/footer-index/module/footer-index.module';
import { CabezeraCentralComponent } from '../components/cabezera-central/cabezera-central.component';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorsExtensionsModule } from 'src/app/shared/components/errors/errors-module.module';
import { FormDireccion } from '../models/BaseFormDireccion';

@NgModule({
  declarations: [
    IndexDireccionComponent,
    MapaComponent,
    ListDireccionesComponent,
    CabezeraCentralComponent,
  ],
  imports: [
    CommonModule,
    DireccionesRoutingModule,
    ImportsUbicacion,
    ReactiveFormsModule,
    ErrorsExtensionsModule,
    MenuIndexModule,
    FooterIndexModule,
  ],
  providers: [ListDireccionesComponent, FormDireccion],
})
export class DireccionesModule {}
