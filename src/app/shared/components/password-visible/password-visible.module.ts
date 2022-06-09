import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';
import { ErrorsExtensionsModule } from '../errors/errors-module.module';
import { PasswordVisibleComponent } from './password-visible.component';

@NgModule({
  declarations: [PasswordVisibleComponent],
  imports: [CommonModule, ReactiveFormsModule, ErrorsExtensionsModule],
  exports: [PasswordVisibleComponent],
})
export class PasswordVisibleModule {}
