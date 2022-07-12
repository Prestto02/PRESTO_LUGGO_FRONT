import { ReactiveFormsModule } from '@angular/forms';
import { ErrorsExtensionsModule } from 'src/app/shared/components/errors/errors-module.module';
import { DatoPersonalesComponent } from '../dato-personales/dato-personales.component';
import { InformacionAdicionalComponent } from '../informacion-adicional/informacion-adicional.component';
import { BaseFormCliente } from '../models/BaseFormPerfilCliente';
import { PerfilClienteComponent } from '../perfil-cliente.component';

export const DeclarationsPerfilCliente = [
  PerfilClienteComponent,
  DatoPersonalesComponent,
  InformacionAdicionalComponent,
];

export const ImportPerfilCliente = [
  ErrorsExtensionsModule,
  ReactiveFormsModule,
];

export const ProvidersPerfilCliente = [BaseFormCliente];
