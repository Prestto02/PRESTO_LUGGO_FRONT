import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { BaseFormProducts } from 'src/app/manager-vendedor/productos/models/BaseformProduct';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { CarritoItemsService } from './services/carrito-items.service';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css'],
})
export class MenuComponent implements OnInit {
  totalCarrito: any;
  //CATEGORIAs ITEMS
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
  constructor(
    private router: Router,
    public formB: BaseFormProducts,
    private apiForm: CarritoItemsService
  ) {}

  ngOnInit(): void {
    this.totalItemsCarrito(); //TOTAL DE ITEMS DEL CARRITO
  }
  totalItemsCarrito() {
    this.apiForm.productsLengthtotal.subscribe((res) => {
      this.totalCarrito = res;
    });
  }
  menuIndex() {
    this.router.navigateByUrl(`${UrlFront.Menu.menu}/${UrlFront.Menu.index}`);
  }
  //BUSCAR PRODUCTO
  buscarProducto() {
    const searchProducts = this.formB.formSearchProducts.get('nombre')?.value; //GUARDO LO QUE TENGO EN EL INPUT
    const categoria = this.formB.formSearchProducts.get('categoria')?.value; //GUARDO LO QUE TENGO EN EL INPUT
    this.router.navigate([
      `${UrlFront.Menu.menu}/${UrlFront.Menu.buscarGet}`,
      searchProducts,
      categoria,
    ]); //ENVIO POR URL LO QUE TENGO DEL INPUT
  }
  //LISTA DE DESEO
  irListaDeseos() {
    this.router.navigateByUrl(
      `${UrlFront.Menu.menu}/${UrlFront.ListaDeseos.listaDeseos}`
    );
  }
}
