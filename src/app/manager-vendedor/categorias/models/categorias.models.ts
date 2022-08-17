import { Injectable } from '@angular/core';
import {
  UntypedFormArray,
  UntypedFormBuilder,
  UntypedFormControl,
  Validators,
} from '@angular/forms';
/* CATEOGORIA SELECCIONADA  */
interface CategorySelect {
  name: string;
}
@Injectable({ providedIn: 'root' })
export class BaseFormCategorias {
  categoriaSeleccionadas: CategorySelect[] = [];
  constructor(private formB: UntypedFormBuilder) {}

  //FORMULARIO
  formCategorias = this.formB.group({
    nameCategoria: [''],
    ArticuloTieneCategoria: this.formB.array([], [Validators.required]),
  });
  //OBTENER EL ARRAY DE LA CATEGORIAS
  get getCategorias() {
    return <UntypedFormArray>this.formCategorias.controls.ArticuloTieneCategoria;
  }
  //AGREGAR AL ARRAY PARA LA NUEVA CATEGORIA
  addCategoriaItems(id: any, e: any) {
    if (e.target.checked) {
      //PREGUNTO SI EXISTE EL EVENTO CHECK: TRUE
      this.getCategorias.push(new UntypedFormControl({ idcategoria_articulo: id }));
      this.categoriaSeleccionadas.push(e.target.value);
    } else {
      this.eliminarItems(id);
    }
  }
  /* AGREGANDO LA CATEGORIA CUANDO SEA EDITADO */
  addCategoriasEdit(id: any, nombre: any) {
    //PREGUNTO SI EXISTE EL EVENTO CHECK: TRUE
    this.getCategorias.push(new UntypedFormControl({ idcategoria_articulo: id }));
    this.categoriaSeleccionadas.push(nombre);
  }
  //ELIMINAR ITEMS DE LA CATEGORIA
  eliminarItems(id: any) {
    let index = this.getCategorias.controls.findIndex(
      (x) => x.value.idcategoria_articulo === id
    ); //BUSCO COINCIDENCIA Y LUEGO ENVIO LA POSICION
    this.getCategorias.removeAt(index);
    this.categoriaSeleccionadas.splice(index, 1);
  }
  //RETORNAMOS EL VALOR DEL FORM CATEGORIA
  getErrorsForm() {
    return this.formCategorias.get('ArticuloTieneCategoria')?.errors;
  }
  //RETORNO EL ARTICULO FORM CATEGORIA
  getFormData() {
    return this.formCategorias.get('ArticuloTieneCategoria')?.value;
  }
  limpiarForm() {
    this.categoriaSeleccionadas = [];
    this.formCategorias.reset();
    this.getCategorias.clear();
  }
}
