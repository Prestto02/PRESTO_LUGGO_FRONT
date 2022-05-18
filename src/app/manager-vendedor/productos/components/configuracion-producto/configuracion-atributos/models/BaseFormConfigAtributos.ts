import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class BaseFormConfigAtributos {
  constructor(private formB: FormBuilder) {}
  //FORM CONFIG ATRIBUTOS
  formConfigAtributos = this.formB.group({
    atributosVariacion: this.formB.array([], [Validators.required]),
  });
  //TRANSFORMAR EN UN ARRAY LOS COLORES
  get atributosVariacion() {
    return this.formConfigAtributos.controls['atributosVariacion'] as FormArray;
  }
  //AÑADIR MAS ATRIBUTOS DE VARIACIONES
  addAtributosVariacion(nombre: any, descripcion: any) {
    let atributosForm = this.formB.group({
      NombreAtributos: [nombre, [Validators.required]],
      Descripcion: [descripcion, [Validators.required]],
      Sku: [''],
      Estado: ['', [Validators.required]],
      PrecioPorVariacion: ['', [Validators.required]],
      StockItems: ['', [Validators.required]],
      StockMinimo: ['', [Validators.required]],
      imagenes: this.formB.array([]),
    });
    this.atributosVariacion.push(atributosForm);
  }
  //IMAGEN ARRAY
  get imgArray() {
    return this.atributosVariacion.get('imagenes') as FormArray;
  }
  //ELIMINAR ITEMS
  removeItems(i: any) {
    this.atributosVariacion.removeAt(i);
  }
}
