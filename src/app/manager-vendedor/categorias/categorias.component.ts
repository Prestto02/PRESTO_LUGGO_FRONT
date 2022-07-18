import { Component, ElementRef, HostListener, OnInit } from '@angular/core';
import { CategoriasService } from '../productos/services/categorias.service';
import { BaseFormCategorias } from './models/categorias.models';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrls: ['./categorias.component.css'],
})
export class CategoriasComponent implements OnInit {
  //VARIABLES
  categoriasItems: any;
  categoriaFocus: boolean = false;
  categoriaSeleccionadas: any = [];
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
    this.apiCategoria.getAllCategoriasPadres().subscribe((res) => {
      /* console.log(res); */
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
    }, 2000);
  }
  //CUANDO SEA EDITAR SETEO A TRUE EL ARREGLO SEGUN LO LLEGADO
  onVerifyCheck(id: any) {
    const idI = this.categoriasItems.filter((res: any) => {
      return res.id === id;
    }); //PARA CAMBIAR LAS CATEGORIAS SELECTED
    idI[0].selected = true;
  }
  //SETEAR EL NUEVO ELEMENTO EN EL ARRAY
  onChangeCheckBox(id: any, e: any) {
    this.formB.addCategoriaItems(id, e);
    const idI = this.categoriasItems.filter((res: any) => {
      return res.id === id;
    }); //PARA CAMBIAR LAS CATEGORIAS SELECTED
    if (e.target.checked) {
      idI[0].selected = true; //PARCHEADO
    } else {
      idI[0].selected = false;
    }
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
