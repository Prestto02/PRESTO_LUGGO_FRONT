import { Component, Input, OnInit } from '@angular/core';
import { AddCarsOrListDesire } from 'src/app/shared/helpers/AddCarsOrListDesire';
import { CarritoItemsComponent } from '../../../index/menu-index/menu/carrito-items/carrito-items.component';
import { ListaDeseosService } from '../../lista-deseos/services/lista-deseos.service';
import { IconCheckServices } from './services/IconsCheck.service';

@Component({
  selector: 'app-icons-cars-desire',
  templateUrl: './icons-cars-desire.component.html',
  styleUrls: ['./icons-cars-desire.component.css'],
})
export class IconsCarsDesireComponent implements OnInit {
  @Input('product') products: any | null = null;
  arrayProductSelect: any = [];
  count = 0;
  constructor(
    private carritoItmes: CarritoItemsComponent, //CARRITO ITEMS
    private apiListDeseo: AddCarsOrListDesire,
    private apiObservableListDesire: ListaDeseosService,
    private checkDesire: IconCheckServices
  ) {}

  ngOnInit(): void {
    this.checkDesireProduct();
  }
  //VERIFY IF FIND THE ID_ARTIC OF LISTCHECKDESIRE
  checkDesireProduct() {
    this.checkDesire.listCheckDesire.subscribe((res) => {
      this.arrayProductSelect = res;
    });
    this.arrayProductSelect.map((res: any) => {
      if (res === this.products.id_artic) {
        this.products.carritoValidacion = true;
        this.count++;
      } else {
        this.products.carritoValidacion = false;
      }
    });
  }
  //AGRGAR AL CARRITO
  agregarAlCarrito(id: any) {
    this.carritoItmes.getListItemCarrito(id);
    //PARA SUBIR EL ITEMS DEL CARRITO
  }

  //AGREGAR LISTA DE DESEOS
  agregarAlDeseo(products: any) {
    this.count++;
    this.verifyCheckDesire(products);
  }

  verifyCheckDesire(products: any) {
    if (this.count % 2 == 0) {
      this.apiObservableListDesire.eliminarListaDeseos(products.id_artic);
      this.checkDesire.removeCheckDesire(products.id_artic);
      this.products.carritoValidacion = false;
    } else {
      this.apiListDeseo.addListDesire(products);
      this.checkDesire.addCheckDesire(products.id_artic);
      this.products.carritoValidacion = true;
    }
  }
}
