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
  //categoriasSelect: any = [];
  checkFocus = false;
  constructor(
    public formB: BaseFormCategorias,
    private apiCategoria: CategoriasService
  ) {}
  data = [
    {
      id: '1',
      nombre: 'programacion',
    },
    {
      id: '2',
      nombre: 'ecuacion',
    },
    {
      id: '3',
      nombre: 'lavadora',
    },
    {
      id: '4',
      nombre: 'mouse',
    },
  ];
  ngOnInit(): void {
    this.getCategorias();
  }
  //TRAIGO LAS CATEGORIAS
  getCategorias() {
    this.apiCategoria.getAllCategorias().subscribe((res) => {
      this.categoriasItems = res;
    });
  }
  /*addCategorias(id: any) {
    this.categoriasSelect.push(id);
    this.formB.onAddCategorias(this.categoriasSelect);
  }*/
  /*remove(i: any) {
    console.log(i);
    this.categoriasSelect.splice(i, 1);
  }*/
}
