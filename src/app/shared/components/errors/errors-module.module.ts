import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorsContainerComponent } from './form-errors-container/form-errors-container.component';
import { MessageErrorComponent } from './message-error/message-error.component';
import { ErrorsServerComponent } from './errors-server/errors-server.component';
import { SuccessServerComponent } from './success-server/success-server.component';
import { ProgressPasswordComponent } from './progress-password/progress-password.component';

@NgModule({
  declarations: [
    FormErrorsContainerComponent,
    MessageErrorComponent,
    ErrorsServerComponent,
    SuccessServerComponent,
    ProgressPasswordComponent,
  ],
  imports: [CommonModule],
  exports: [
    FormErrorsContainerComponent,
    MessageErrorComponent,
    ErrorsServerComponent,
    SuccessServerComponent,
    ProgressPasswordComponent,
  ],
})
export class ErrorsExtensionsModule {}
