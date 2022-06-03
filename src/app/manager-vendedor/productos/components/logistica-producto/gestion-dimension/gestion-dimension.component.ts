import { Component, OnInit } from '@angular/core';
import { BaseFormTamanoProducto } from '../models/BaseFormTamano';

@Component({
  selector: 'app-gestion-dimension',
  templateUrl: './gestion-dimension.component.html',
  styleUrls: ['./gestion-dimension.component.css'],
})
export class GestionDimensionComponent implements OnInit {
  puertoEnvio: boolean = true;
  adnEnvio: boolean = false;

  constructor(public formTamano: BaseFormTamanoProducto) {}

  ngOnInit(): void {}
  abrirPuerto(e: any) {
    this.formTamano.formTamanoProducto.patchValue({
      GestionEnvio: e.target.value,
    });
    this.puertoEnvio = true;
    this.adnEnvio = false;
  }
  abrirArticulo(e: any) {
    this.formTamano.formTamanoProducto.patchValue({
      GestionEnvio: e.target.value,
    });
    this.puertoEnvio = false;
    this.adnEnvio = true;
  }
}
