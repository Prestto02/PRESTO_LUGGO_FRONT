import { Component, OnInit } from '@angular/core';
import { BaseFormEtiquetas } from './models/BaseFormEtiquetas';

@Component({
  selector: 'app-form-etiquetas',
  templateUrl: './form-etiquetas.component.html',
  styleUrls: ['./form-etiquetas.component.css'],
})
export class FormEtiquetasComponent implements OnInit {
  constructor(public formB: BaseFormEtiquetas) {}

  ngOnInit(): void {}
  //AGREGAR ETIQUETAS CON LA TECLA ENTER
  setEtiquetas(e: any) {
    const valor = this.formB.formEtiquetas.get('etiquetaForm')?.value;
    if (valor.length <= 2) return;
    if (e.key === 'Enter' && this.verifyInputErrors()) {
      //VERIFICO LOS CARACTERES ESPECIALES Y LA TECLA ENTER
      e.preventDefault();
      this.formB.addEtiquetas(valor);
      this.formB.formEtiquetas.patchValue({
        etiquetaForm: '',
      });
    }
  }
  //VERIFICO SI ES VALIDO EL INPUT DE ETIQUETAS FORM
  verifyInputErrors() {
    const errors = this.formB.formEtiquetas.get('etiquetaForm')?.valid;
    return errors;
  }
  //ELIMINAR ITEMS
  removeItems(i: any) {
    this.formB.removeItemsEtiqueta(i);
  }
}
