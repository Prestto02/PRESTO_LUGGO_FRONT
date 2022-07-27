import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CategoriasService } from '../productos/services/categorias.service';
import { BaseFormCategorias } from './models/categorias.models';
import { ListCategoryApi } from './models/ListCategory';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent implements OnInit {
  //VARIABLES
  categoriasItems: ListCategoryApi[] = [];
  categoriaFocus: boolean = false;
  constructor(
    public formB: BaseFormCategorias,
    private apiCategoria: CategoriasService,
    private eRef: ElementRef
  ) {}

  ngOnInit(): void {
    this.getAllCategorias();
    this.verifyCheckCategoryEdit();
  }

  //OBTENER TODAS LAS CATEGORIAS
  getAllCategorias() {
    this.apiCategoria
      .getListCategorias()
      .subscribe((res: ListCategoryApi[]) => {
        this.categoriasItems = res;
      });
  }
  //VERIFYCO SI EXISTE UN ARRAY PARA HACER EL RECORRIDO
  verifyCheckCategoryEdit() {
    setTimeout(() => {
      if (this.formB.getCategorias.controls.length > 0) {
        this.formB.getCategorias.controls.map((res: any) => {
          this.onVerifyCheck(res.value.idcategoria_articulo);
        });
      }
    }, 1000);
  }
  //CUANDO SEA EDITAR SETEO A TRUE EL ARREGLO SEGUN LO LLEGADO
  onVerifyCheck(id: number) {
    const idI = this.categoriasItems.filter((res: ListCategoryApi) => {
      return res.id === id;
    }); //PARA CAMBIAR LAS CATEGORIAS SELECTED
    idI[0].selected = true;
  }
  //DETECTAR CLICK FUERA DEL COMPONENTE
  @HostListener('document:click', ['$event']) clickout(event: any) {
    if (this.eRef.nativeElement.contains(event.target)) {
      this.categoriaFocus = true; //SI ESTA DENTRO
    } else {
      this.categoriaFocus = false; //SI ESTA AFUERA
    }
  }
}
