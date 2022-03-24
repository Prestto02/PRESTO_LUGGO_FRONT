import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormErrorsContainerComponent } from './form-errors-container/form-errors-container.component';
import { MessageErrorComponent } from './message-error/message-error.component';

@NgModule({
  declarations: [FormErrorsContainerComponent, MessageErrorComponent],
  imports: [CommonModule],
  exports: [FormErrorsContainerComponent, MessageErrorComponent],
})
export class ErrorsExtensionsModule {}
