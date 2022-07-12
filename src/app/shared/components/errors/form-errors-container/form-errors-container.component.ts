import { Component, Input, OnInit } from '@angular/core';
import { AbstractControl } from '@angular/forms';

@Component({
  selector: 'app-form-errors-container',
  templateUrl: './form-errors-container.component.html',
  styleUrls: ['./form-errors-container.component.css'],
})
export class FormErrorsContainerComponent implements OnInit {
  @Input('forControl') control!: AbstractControl | null;
  constructor() {}

  ngOnInit(): void {}
}
