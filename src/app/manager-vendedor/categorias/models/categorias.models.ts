import { Injectable } from '@angular/core';
import {
  FormArray,
  FormBuilder,
  FormControl,
  Validators,
} from '@angular/forms';
@Injectable({ providedIn: 'root' })
export class BaseFormCategorias {
  categoriaSeleccionadas: any = [];
  constructor(private formB: FormBuilder) {}

  //FORMULARIO
  formCategorias = this.formB.group({
    nameCategoria: [''],
    ArticuloTieneCategoria: this.formB.array([]),
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
      this.categoriaSeleccionadas.push(e.target.value);
    } else {
      this.eliminarItems(id);
    }
  }
  //ELIMINAR ITEMS DE LA CATEGORIA
  eliminarItems(id: any) {
    let index = this.getCategorias.controls.findIndex(
      (x) => x.value.id_categoria === id
    );
    this.getCategorias.removeAt(index);
    this.categoriaSeleccionadas.splice(index, 1);
  }
  //RETORNAMOS EL VALOR DEL FORM CATEGORIA
  getErrorsForm() {
    return this.formCategorias.get('ArticuloTieneCategoria')?.errors;
  }
  getFormData() {
    return this.formCategorias.get('ArticuloTieneCategoria')?.value;
  }
}
