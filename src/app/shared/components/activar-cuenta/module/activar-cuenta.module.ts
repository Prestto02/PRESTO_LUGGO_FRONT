import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivarCuentaComponent } from '../activar-cuenta.component';
import { HttpClientModule } from '@angular/common/http';
import { ActivarCuentaRoutingModule } from './acivar-cuenta-routing.module';
import { BienvenidoUserComponent } from '../bienvenido-user/bienvenido-user.component';

@NgModule({
  declarations: [ActivarCuentaComponent,BienvenidoUserComponent],
  imports: [ActivarCuentaRoutingModule, CommonModule, HttpClientModule],
})
export class ActivarCuentaModule {}
