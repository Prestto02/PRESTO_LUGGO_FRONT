import { Component, Input, OnInit } from '@angular/core';
import { BaseFormTamanoProducto } from '../models/BaseFormTamano';

@Component({
  selector: 'app-gestion-dimension',
  templateUrl: './gestion-dimension.component.html',
  styleUrls: ['./gestion-dimension.component.css'],
})
export class GestionDimensionComponent implements OnInit {
  @Input('productEdit') productEdit: any | null = null;
  puertoEnvio: boolean = true;
  adnEnvio: boolean = false;

  constructor(public formTamano: BaseFormTamanoProducto) {}

  ngOnInit(): void {
    this.getDataForm();
  }
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
  //VERIFICO ADN O PUERTTO
  verifyPuerttoOrAdn() {
    const dato = this.formTamano.formTamanoProducto.get('GestionEnvio')?.value;
    if (dato === 'P') {
      this.puertoEnvio = true;
      this.adnEnvio = false;
    } else if (dato === 'A') {
      this.puertoEnvio = false;
      this.adnEnvio = true;
    }
  }
  getDataForm() {
    setTimeout(() => {
      if (this.productEdit) {
        this.setFormDataProductEdit();
        this.verifyPuerttoOrAdn();
      }
    }, 1000);
  }

  setFormDataProductEdit() {
    this.formTamano.setFormEditProduct(this.productEdit);
  }
}
