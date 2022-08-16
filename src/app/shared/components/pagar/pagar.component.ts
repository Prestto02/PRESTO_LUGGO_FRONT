import { Component, OnDestroy, OnInit } from '@angular/core';
import { RepositorioImg } from '../../helpers/RepositorioImg';
import { CarritoItemsService } from '../index/menu-index/menu/services/carrito-items.service';
import { BaseFormPagar } from './formulario-pagar/models/BaseFormPagar';
import { IFormularioPagar } from './formulario-pagar/models/IPagarForm';
import { PagarOCarritoPost } from './helpers/PagaryCarritoPost';
import { PagarServices } from './services/Pagar.service';
@Component({
  selector: 'app-pagar',
  templateUrl: './pagar.component.html',
  styleUrls: ['./pagar.component.css'],
})
export class PagarComponent implements OnInit, OnDestroy {
  urlRepositorio: string = `${RepositorioImg.urlRepositorio}`;
  arrayProductsList: any = [];
  totalAPagar: any = 0;
  arrayPagoProducts: any = [];
  htmlServer: any;
  contador: number = 0;
  constructor(
    private apiServi: CarritoItemsService,
    public formB: BaseFormPagar,
    private apiPagar: PagarServices,
    private pagarOCarrito: PagarOCarritoPost
  ) {}
  ngOnInit(): void {
    this.getAllProducts();
    this.sumaTotalYSubtotal();
  }

  ngOnDestroy(): void {
    this.contador = 0;
  }
  //TODOS LOS PRODUCTOS
  getAllProducts() {
    this.apiServi.productCarrito.subscribe((res: any) => {
      this.arrayProductsList = res;
    });
    this.totalAPagarCarrito();
  }
  sumaTotalYSubtotal() {
    this.totalAPagar = 0;
    this.arrayProductsList.map((res: any) => {
      this.totalAPagar = this.totalAPagar + res.subtotal; //REALIZO LA SUMA SEGUN LOS PRODUCTOS EN EL ARREGLO OBSERVABLE
    });
    this.apiServi.totalAPAgarObservable(this.totalAPagar); //CAMBIO EL ESTADO DEL OBSERVABLE
  }
  //ME SUSCRIBO AL TOTAL A PAGAR
  totalAPagarCarrito() {
    this.apiServi.totalAPagar$.subscribe((res: any) => {
      this.totalAPagar = res;
    });
  }

  submitPagar(form: IFormularioPagar) {
    this.contador++;
    if (this.contador === 1) {
      const formPayments = this.pagarOCarrito.pagarSubmit(
        form,
        this.arrayProductsList
      );
      this.apiPagar.postPagoUser(formPayments).subscribe((res: any) => {
        console.log(res.data);
        this.htmlServer = res.data;
        this.pagarOCarrito.injectDomIFrame(res);
      });
    }
  }
  /*   irAOtraPAgina() {
    this.router.navigateByUrl(
      `${UrlFront.Pagar.pagar}/${UrlFront.Pagar.verificarPago}?metodo=exitoso&token=YjhlMDdiYjI2MTY1NzI0MTIzOGJhNjNkOGIxMzkyMTg%3D`
    );
  } */
}
