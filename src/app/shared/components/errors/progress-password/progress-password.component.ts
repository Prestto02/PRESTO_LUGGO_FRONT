import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress-password',
  templateUrl: './progress-password.component.html',
  styleUrls: ['./progress-password.component.css'],
})
export class ProgressPasswordComponent implements OnInit {
  @Input('forErrorCode') errorCode!: any;
  constructor() {}

  ngOnInit(): void {}
}
