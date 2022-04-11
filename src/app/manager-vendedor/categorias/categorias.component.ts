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
  categoriasSelect: any = [];
  checkFocus = false;
  constructor(
    public formB: BaseFormCategorias,
    private apiCategoria: CategoriasService
  ) {}
  ngOnInit(): void {
    this.getCategorias();
  }
  //TRAIGO LAS CATEGORIAS
  getCategorias() {
    this.apiCategoria.getAllCategorias().subscribe((res) => {
      this.categoriasItems = res;
    });
  }
  //AGREGO LA CATEGORIA SELECCIONADA
  addCategorias(id: any) {
    this.categoriasSelect.push(id); //AGREGO AL ARREGLO
    this.formB.onAddCategorias(this.categoriasSelect); //AGREGO AL SUBJECT
  }
  //ELIMINO DE LA LISTA LA CATEGORIA QUE NO NECESITA
  remove(i: any) {
    console.log(i);
    this.categoriasSelect.splice(i, 1);
  }
}
