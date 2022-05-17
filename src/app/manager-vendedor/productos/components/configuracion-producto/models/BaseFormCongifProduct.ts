import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class BaseFormConfigProducts {
  constructor(private formB: FormBuilder) {}
  formConfigProduct = this.formB.group({
    nombreVariacion: [''],
    Atributos: this.formB.array([],),
  });
  //TRANSFORMAR EN UN ARRAY LOS ATRIBUTOS
  get atributos() {
    return this.formConfigProduct.controls['Atributos'] as FormArray;
  }
  //AGREGO EL NUEVO ATRBUTO
  addAtributos(nombre: any, id: any) {
    let atributosForm = this.formB.group({
      id: [id, [Validators.required]],
      nombre: [nombre, [Validators.required]],
      escoger: ['', [Validators.required]],
      descripcion: ['', [Validators.required]],
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
}
