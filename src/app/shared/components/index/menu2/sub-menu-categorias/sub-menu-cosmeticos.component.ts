import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-sub-menu-categorias',
  templateUrl: './sub-menu-categorias.component.html',
  styleUrls: ['./sub-menu-categorias.component.css'],
})
export class SubMenuCategoriasComponent implements OnInit {
  @Input('ItemsSubCategoria') subCategoriaItems: any | null = null;
  constructor() {}

  ngOnInit(): void {}
}
