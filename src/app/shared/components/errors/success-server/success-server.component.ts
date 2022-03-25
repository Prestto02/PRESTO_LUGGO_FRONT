import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-success-server',
  templateUrl: './success-server.component.html',
  styleUrls: ['./success-server.component.css']
})
export class SuccessServerComponent implements OnInit {
  @Input('message') message: string | null = null;
  @Input('success') success: boolean | null = null;
  constructor() { }

  ngOnInit(): void {
  }

}
