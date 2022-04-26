import { Component, OnInit } from '@angular/core';
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
  checkFocus = false;
  value = '';
  constructor(
    public formB: BaseFormCategorias,
    private apiCategoria: CategoriasService
  ) {}
  ngOnInit(): void {
    this.getAllCategorias();
  }
  //OBTENER TODAS LAS CATEGORIAS
  getAllCategorias() {
    this.apiCategoria.getAllCategorias().subscribe((res) => {
      this.categoriasItems = res;
    });
  }
  //SETEAR EL NUEVO ELEMENTO EN EL ARRAY
  onChangeCheckBox(id: any, e: any) {
    this.formB.addCategoriaItems(id, e);
  }
}
