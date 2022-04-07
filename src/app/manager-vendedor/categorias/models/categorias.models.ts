import { Injectable } from '@angular/core';
import { FormArray, FormBuilder, Validators } from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class BaseFormCategorias {
  constructor(private formB: FormBuilder) {}
  //ArticuloTieneCategoria[{}]
  formCategorias = this.formB.group({
    ArticuloTieneCategoria: this.formB.array([
      this.formB.group({
        idcategoria_articulo: [
          '',
          [Validators.required, Validators.minLength(3)],
        ],
      }),
    ]),
  });
  //TOMAR EL FORMARRAY
  get arrayCategoria() {
    return this.formCategorias.controls['ArticuloTieneCategoria'] as FormArray; //OBTENGO EL FORMULARIO CON EL ARRAY
  }
  //AGREGAR CATEGORIAS
  onAddCategorias() {
    const lessonCategoria = this.formB.group({
      idcategoria_articulo: [
        '',
        [Validators.required, Validators.minLength(3)],
      ],
    });
    this.arrayCategoria.push(lessonCategoria);
  }
  //ELIMINAR CATEGORIAS
  remove(i: any) {
    this.arrayCategoria.removeAt(i);
  }
  //TRAER TODAS LAS CATEGORIAS
  getDataFormCateogoria() {
    return this.formCategorias.value.ArticuloTieneCategoria;
  }

}
