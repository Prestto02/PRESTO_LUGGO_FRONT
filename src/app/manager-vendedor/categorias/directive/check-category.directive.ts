import { Directive, HostListener, Input } from '@angular/core';
import { BaseFormCategorias } from '../models/categorias.models';
import { ListCategoryApi } from '../models/ListCategory';

@Directive({
  selector: '[appCheckCategory]',
})
export class CheckCategoryDirective {
  @Input('listCategory') listCategory: ListCategoryApi[] = [];
  @Input('idCategory') idCategory: number = 0;
  constructor(private formB: BaseFormCategorias) {}
  /* EVENTO CHANGE PARA CAMBIAR EL ESTADO DEL SELECT DE CATEGORIAS */
  @HostListener('change', ['$event']) onChange(event: any) {
    this.formB.addCategoriaItems(this.idCategory, event);
    const idI = this.listCategory.filter((res: ListCategoryApi) => {
      return res.id === this.idCategory;
    }); //PARA CAMBIAR LAS CATEGORIAS SELECTED
    if (event.target.checked) {
      idI[0].selected = true; //PARCHEADO
    } else {
      idI[0].selected = false;
    }
  }
}
