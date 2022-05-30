import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
import { Expresion } from 'src/app/shared/validations/expresionRegular';
@Injectable({ providedIn: 'root' })
export class BaseFormConfigProducts {
  constructor(private formB: FormBuilder) {}
  formConfigProduct = this.formB.group({
    nombreVariacion: [''],
    Atributos: this.formB.array([
      this.formB.group({
        id: [1, [Validators.required]],
        url: ['api/color', [Validators.required]],
        nombre: ['Color', [Validators.required]],
        id_atributo: ['', Validators.required],
        codigoHexagedecima: [''],
        escoger: [
          '',
          [
            Validators.required,
            Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
          ],
        ],
        descripcion: [
          '',
          [
            Validators.required,
            Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
          ],
        ],
      }),
    ]),
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
      codigoHexagedecima: [''],
      escoger: [
        '',
        [
          Validators.required,
          Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
        ],
      ],
      descripcion: [
        '',
        [
          Validators.required,
          Validators.pattern(Expresion.SoloLetrasAcentosEspacios),
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
