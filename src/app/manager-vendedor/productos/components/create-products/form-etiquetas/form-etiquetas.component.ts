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
  setEtiquetas(e: any) {
    const valor = this.formB.formEtiquetas.get('etiquetaForm')?.value;
    if (e.key === 'Enter') {
      this.formB.addEtiquetas(valor);
      this.formB.formEtiquetas.patchValue({
        etiquetaForm: '',
      });
    }
  }
  //ELIMINAR ITEMS
  removeItems(i: any) {
    this.formB.removeItemsEtiqueta(i);
  }
}
