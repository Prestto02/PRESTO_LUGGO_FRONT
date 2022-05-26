import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class BaseFormConfigProducts {
  constructor(private formB: FormBuilder) {}
  formConfigProduct = this.formB.group({
    nombreVariacion: [''],
    Atributos: this.formB.array([]),
  });
  //TRANSFORMAR EN UN ARRAY LOS ATRIBUTOS
  get atributos() {
    return this.formConfigProduct.controls['Atributos'] as FormArray;
  }
  //AGREGO EL NUEVO ATRBUTO SELECCIONADO
  addAtributos(nombre: any, id: any, url: any) {
    let atributosForm = this.formB.group({
      id: [id, [Validators.required]],
      url: [url, [Validators.required]],
      nombre: [nombre, [Validators.required]],
      id_atributo: [id, Validators.required],
      escoger: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z0-9Á-ÿ\u00E0-\u00FC\-_ ]+$/),
        ],
      ],
      descripcion: [
        '',
        [
          Validators.required,
          Validators.pattern(/^[A-Za-z0-9Á-ÿ\u00E0-\u00FC\-_ ]+$/),
        ],
      ],
    });
    this.atributos.push(atributosForm);
  }
  //VERIFYCO SI EXISTE EL MISMO ELEMENTO EN MI ARRAY DE ATRIBUTOS
  verifyAtributos(nombre: any) {
    const valor = this.atributos.controls.findIndex((res) => {
      return res.value.nombre === nombre; //OBTENGO LA POSICION DEL ARREGLO PARA ELIMINARLO
    });
    return valor;
  }
  //ELIMINAR ITEMS POR CHECKED
  removeItemsChecked(nombre: any) {
    const valor = this.verifyAtributos(nombre);
    this.removeItems(valor); //ELIMINO LA POSICION ENCONTRADA
  }
  //ELIMINAR ITEMS
  removeItems(i: any) {
    this.atributos.removeAt(i);
  }
  removeAllArrayAtributos() {
    this.atributos.clear();
  }
}
