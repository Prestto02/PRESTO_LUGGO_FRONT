import { Component, Input, OnInit } from '@angular/core';
import { CategoriasService } from 'src/app/manager-vendedor/productos/services/categorias.service';

@Component({
  selector: 'app-sub-menu-categorias',
  templateUrl: './sub-menu-categorias.component.html',
  styleUrls: ['./sub-menu-categorias.component.css'],
})
export class SubMenuCategoriasComponent implements OnInit {
  @Input('ItemsSubCategoria') subCategoriaItems: any | null = null;
  categoriasHijosItems: any[] = [];
  constructor(private apiCategorias: CategoriasService) {}

  ngOnInit(): void {}

  getHijosCategorias(id: any) {
    this.apiCategorias.getIdCategoriaHijo(id).subscribe((res) => {
      this.subCategoriaItems = null;
      this.categoriasHijosItems = res;
    });
  }
}
