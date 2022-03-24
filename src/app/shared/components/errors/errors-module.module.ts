import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorsContainerComponent } from './form-errors-container/form-errors-container.component';
import { MessageErrorComponent } from './message-error/message-error.component';
import { ErrorsServerComponent } from './errors-server/errors-server.component';
import { SuccessServerComponent } from './success-server/success-server.component';

@NgModule({
  declarations: [
    FormErrorsContainerComponent,
    MessageErrorComponent,
    ErrorsServerComponent,
    SuccessServerComponent,
  ],
  imports: [CommonModule],
  exports: [
    FormErrorsContainerComponent,
    MessageErrorComponent,
    ErrorsServerComponent,
    SuccessServerComponent,
  ],
})
export class ErrorsExtensionsModule {}
