import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BaseFormTamanoProducto } from '../models/BaseFormTamano';

@Component({
  selector: 'app-gestion-dimension',
  templateUrl: './gestion-dimension.component.html',
  styleUrls: ['./gestion-dimension.component.css'],
})
export class GestionDimensionComponent implements OnInit, OnChanges {
  @Input('productEdit') productEdit: any | null = null;
  puertoEnvio: boolean = false;
  adnEnvio: boolean = true;

  constructor(public formTamano: BaseFormTamanoProducto) {}

  ngOnChanges(changes: SimpleChanges): void {
    if (changes.productEdit.currentValue != changes.productEdit.previousValue) {
      this.productEdit = changes.productEdit.currentValue;
      this.getDataForm();
      this.verifyPuerttoOrAdn();
    }
  }

  ngOnInit(): void {
    // this.getDataForm();
    //this.verifyPuerttoOrAdn();
  }
  /*   abrirPuerto(e: any) {
    this.formTamano.formTamanoProducto.patchValue({
      GestionEnvio: e.target.value,
    });
    this.puertoEnvio = true;
    this.adnEnvio = false;
  } */
  abrirArticulo(e: any) {
    this.formTamano.formTamanoProducto.patchValue({
      GestionEnvio: e.target.value,
    });
    /* this.puertoEnvio = false; */
    this.adnEnvio = true;
  }
  //ENVIO CHECK GRATIS(){
  envio_gratisCheck(e: any) {
    const value = this.formTamano.formTamanoProducto.get('envio_gratis')?.value;
    if (value) this.adnEnvio = false;
    else this.adnEnvio = true;
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
    if (this.productEdit) {
      this.setFormDataProductEdit();
      this.verifyPuerttoOrAdn();
    }
  }

  setFormDataProductEdit() {
    this.formTamano.setFormEditProduct(this.productEdit);
  }
}
