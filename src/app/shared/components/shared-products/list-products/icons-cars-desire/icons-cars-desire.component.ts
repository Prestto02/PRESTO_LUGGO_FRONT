import { Component, Input, OnInit } from '@angular/core';
import { AddCarsOrListDesire } from 'src/app/shared/helpers/AddCarsOrListDesire';
import { ListaDeseosService } from '../../lista-deseos/services/lista-deseos.service';

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
    private apiListDeseo: AddCarsOrListDesire,
    private apiObservableListDesire: ListaDeseosService
  ) {}

  ngOnInit(): void {
    this.checkDesireProduct();
  }
  //VERIFY IF FIND THE ID_ARTIC OF LISTCHECKDESIRE
  checkDesireProduct() {
    this.apiObservableListDesire.listaDeseos.subscribe((res: any) => {
      this.arrayProductSelect = res;
    });
    this.arrayProductSelect.map((res: any) => {
      if (res.id_artic === this.products.id_artic) {
        this.products.carritoValidacion = true;
        this.count++;
      }
    });
  }
  //AGRGAR AL CARRITO
  agregarAlCarrito(id: any) {
    this.apiListDeseo.addProductCars(id);
    //PARA SUBIR EL ITEMS DEL CARRITO
  }

  //AGREGAR LISTA DE DESEOS
  agregarAlDeseo(products: any) {
    this.count++;
    this.verifyCheckDesire(products); //ENVIO LO VERIFICACION DEL PRODUCTO
  }

  verifyCheckDesire(products: any) {
    if (this.count % 2 == 0) {
      //SI EL COUNT ES PAR
      this.apiObservableListDesire.eliminarListaDeseos(products.id_artic);
      this.products.carritoValidacion = false; //ELIMINO TODO
    } else {
      //SI ES IMPAR
      this.products.carritoValidacion = true;
      this.apiListDeseo.addListDesire(products); //AGREGO TODO DEL ARTICULO
    }
  }
}
