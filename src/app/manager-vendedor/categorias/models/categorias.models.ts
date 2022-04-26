import { Injectable } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class BaseFormCategorias {
  constructor(private formB: FormBuilder) {}

  //FORMULARIO
  formCategorias = this.formB.group({
    nameCategoria:[''],
    ArticuloTieneCategoria: this.formB.array([], [Validators.required]),
  });
  //OBTENER EL ARRAY DE LA CATEGORIAS
  get getCategorias() {
    return <FormArray>this.formCategorias.controls.ArticuloTieneCategoria;
  }
  //AGREGAR AL ARRAY PARA LA NUEVA CATEGORIA
  addCategoriaItems(id: any, e: any) {
    if (e.target.checked) {
      //PREGUNTO SI EXISTE EL EVENTO CHECK: TRUE
      this.getCategorias.push(new FormControl({ id_categoria: id }));
    } else {
      //SI ES CHECK:FALSE
      let index = this.getCategorias.controls.findIndex((x) => x.value === id);
      this.getCategorias.removeAt(index);
    }
  }
}
