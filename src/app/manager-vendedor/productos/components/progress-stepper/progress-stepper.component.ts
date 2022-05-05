import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-stepper',
  templateUrl: './progress-stepper.component.html',
  styleUrls: ['./progress-stepper.component.css'],
})
export class ProgressStepperComponent implements OnInit {
  @Input('width') width: boolean | null = null;
  constructor() {}

  ngOnInit(): void {}
}
