import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-dato-personales',
  templateUrl: './dato-personales.component.html',
  styleUrls: ['./dato-personales.component.css'],
})
export class DatoPersonalesComponent implements OnInit {
  @Input('formB') formB: any | null = null;
  constructor() {}

  ngOnInit(): void {}
}
