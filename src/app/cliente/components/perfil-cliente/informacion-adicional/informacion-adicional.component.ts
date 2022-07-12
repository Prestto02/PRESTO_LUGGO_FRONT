import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-informacion-adicional',
  templateUrl: './informacion-adicional.component.html',
  styleUrls: ['./informacion-adicional.component.css'],
})
export class InformacionAdicionalComponent implements OnInit {
  @Input('formB') formB: any | null = null;
  constructor() {}

  ngOnInit(): void {}
}
