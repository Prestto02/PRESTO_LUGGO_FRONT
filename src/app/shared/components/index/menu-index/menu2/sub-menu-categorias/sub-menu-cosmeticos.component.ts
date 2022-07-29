import { Component, Input, OnInit } from '@angular/core';
import { ListCategoryApi } from 'src/app/manager-vendedor/categorias/models/ListCategory';
import { CategoriasService } from 'src/app/manager-vendedor/productos/services/categorias.service';

@Component({
  selector: 'app-sub-menu-categorias',
  templateUrl: './sub-menu-categorias.component.html',
  styleUrls: ['./sub-menu-categorias.component.css'],
})
export class SubMenuCategoriasComponent implements OnInit {
  @Input('ItemsSubCategoria')
  subCategoriaItems: ReadonlyArray<ListCategoryApi> | null = null;
  constructor(private apiCategorias: CategoriasService) {}

  ngOnInit(): void {}

  getHijosCategorias(id: any) {
    this.apiCategorias
      .getIdCategoriaHijo(id)
      .subscribe((res: ReadonlyArray<ListCategoryApi>) => {
        //this.subCategoriaItems = null;
        this.subCategoriaItems = res;
      });
  }
}
