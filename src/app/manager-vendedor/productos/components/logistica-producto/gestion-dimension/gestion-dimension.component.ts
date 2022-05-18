import { Component, OnInit } from '@angular/core';
import { BaseFormTamanoProducto } from '../models/BaseFormTamano';

@Component({
  selector: 'app-gestion-dimension',
  templateUrl: './gestion-dimension.component.html',
  styleUrls: ['./gestion-dimension.component.css'],
})
export class GestionDimensionComponent implements OnInit {
  constructor(public formTamano: BaseFormTamanoProducto) {}

  ngOnInit(): void {}
}
