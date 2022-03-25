import { Component, Host, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';
import { FormErrorsContainerComponent } from '../form-errors-container/form-errors-container.component';
import { errosDictonary } from '../dictionarioError';

@Component({
  selector: 'app-message-error',
  templateUrl: './message-error.component.html',
  styleUrls: ['./message-error.component.css'],
})
export class MessageErrorComponent implements OnInit {
  @Input('forErrorCode') errorCode!: string;
  @Input() customMsg: string | null = null;
  control!: AbstractControl | null;

  get errorMsg(): string {
    if (this.customMsg) {
      return this.customMsg;
    }

    if (errosDictonary[this.errorCode] !== undefined) {
      return errosDictonary[this.errorCode];
    }

    return `Hay un error en el campo. (code: ${this.errorCode})`;
  }

  constructor(@Host() private errorContainer: FormErrorsContainerComponent) {}

  ngOnInit(): void {
    this.control = this.errorContainer.control;
  }
}
