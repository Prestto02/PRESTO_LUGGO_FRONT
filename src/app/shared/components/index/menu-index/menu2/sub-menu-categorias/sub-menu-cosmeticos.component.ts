import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { SubListCategoryApi } from 'src/app/manager-vendedor/categorias/models/ListCategory';
import { CategoriasService } from 'src/app/manager-vendedor/productos/services/categorias.service';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Component({
  selector: 'app-sub-menu-categorias',
  templateUrl: './sub-menu-categorias.component.html',
  styleUrls: ['./sub-menu-categorias.component.css'],
})
export class SubMenuCategoriasComponent implements OnInit {
  @Input('ItemsSubCategoria')
  subCategoriaItems: ReadonlyArray<SubListCategoryApi> | null = null;
  urlCategory: string = '';
  constructor(
    private apiCategorias: CategoriasService,
    private router: Router
  ) {}

  ngOnInit(): void {}

  getHijosCategorias(id: any, url: string) {
    this.urlCategory = url;
    this.apiCategorias
      .getIdCategoriaHijo(id)
      .subscribe((res: ReadonlyArray<SubListCategoryApi>) => {
        this.subCategoriaItems = res;
        if (this.subCategoriaItems.length === 0) {
          this.irBuscar();
        }
      });
  }

  irBuscar() {
    this.router.navigateByUrl(
      `${UrlFront.Menu.menu}/${UrlFront.Menu.buscarGet}/${this.urlCategory}`
    );
  }
}
