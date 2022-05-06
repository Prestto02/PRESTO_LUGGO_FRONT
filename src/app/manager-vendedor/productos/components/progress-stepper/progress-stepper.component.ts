import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-stepper',
  templateUrl: './progress-stepper.component.html',
  styleUrls: ['./progress-stepper.component.css'],
})
export class ProgressStepperComponent implements OnInit {
  @Input('width') width: string | null = null;
  @Input('btn-primary') btnPrimary: string | null = null;
  @Input('btn-secondary') btnSecondary: string | null = null;
  @Input('btnTerceary') btnTerceary:string | null = null;
  constructor() {}

  ngOnInit(): void {}
}
