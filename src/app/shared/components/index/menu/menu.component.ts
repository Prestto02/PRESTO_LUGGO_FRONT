import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseFormProducts } from 'src/app/products/models/BaseformProduct';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  ///CATEGORIAs ITEmS
  categoriaItems: any[] = [
    {
      id: 1,
      name: 'Cosméticos y bellezas',
    },
    {
      id: 2,
      name: 'Estilos y moda',
    },
    {
      id: 3,
      name: 'Deportes y actividades',
    },

    {
      id: 4,
      name: 'Tecnología e innovación',
    },

    {
      id: 5,
      name: 'Hogar y decoración',
    },

    {
      id: 6,
      name: 'Electrodomésticos',
    },
    {
      id: 7,
      name: 'Juguetería',
    },
    {
      id: 8,
      name: 'Salud y cuidado personal',
    },
    {
      id: 9,
      name: 'Joyería y accesorios',
    },
  ];
  constructor(private router: Router, public formB: BaseFormProducts) {}

  ngOnInit(): void {}
  menuIndex() {
    this.router.navigateByUrl(`${UrlFront.Menu}/${UrlFront.Menu.index}`);
  }
  buscarProducto() {
    const searchProducts = this.formB.formSearchProducts.get('nombre')?.value;
    const categoria = this.formB.formSearchProducts.get('categoria')?.value;
    this.router.navigate([
      `${UrlFront.Menu.menu}/${UrlFront.Menu.buscarGet}`,
      searchProducts,
      categoria,
    ]);
  }
}
