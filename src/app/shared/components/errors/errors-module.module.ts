import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorsContainerComponent } from './form-errors-container/form-errors-container.component';
import { MessageErrorComponent } from './message-error/message-error.component';
import { ErrorsServerComponent } from './errors-server/errors-server.component';
import { SuccessServerComponent } from './success-server/success-server.component';
import { ProgressPasswordComponent } from './progress-password/progress-password.component';
import { ModalsComponent } from '../modals/modals.component';
import { ButtonsLoadComponent } from '../buttons-load/buttons-load.component';
import { LogoLuggoComponent } from '../logo-luggo/logo-luggo.component';

@NgModule({
  declarations: [
    FormErrorsContainerComponent,
    MessageErrorComponent,
    ErrorsServerComponent,
    SuccessServerComponent,
    ProgressPasswordComponent,
    ModalsComponent, //MODALS COMPONENTS
    ButtonsLoadComponent, //BUTTONS LOADS
    LogoLuggoComponent,
  ],
  imports: [CommonModule],
  exports: [
    FormErrorsContainerComponent,
    MessageErrorComponent,
    ErrorsServerComponent,
    SuccessServerComponent,
    ProgressPasswordComponent,
    ModalsComponent,
    ButtonsLoadComponent,
    LogoLuggoComponent,
  ],
})
export class ErrorsExtensionsModule {}
