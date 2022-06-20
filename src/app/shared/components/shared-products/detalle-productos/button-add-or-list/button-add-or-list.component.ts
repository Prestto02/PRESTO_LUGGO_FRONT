import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/login/services/token.service';
import { AddCarsOrListDesire } from 'src/app/shared/helpers/AddCarsOrListDesire';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Component({
  selector: 'app-button-add-or-list',
  templateUrl: './button-add-or-list.component.html',
  styleUrls: ['./button-add-or-list.component.css'],
})
export class ButtonAddOrListComponent implements OnInit {
  @Input('productoObjeto') productoObjeto: any | null = null;
  idUsuario: any;
  constructor(
    private apiCarOrList: AddCarsOrListDesire,
    private token: TokenService,
    private router: Router
  ) {
    this.idUsuario = this.token.getTokenId();
  }

  ngOnInit(): void {}
  //AGREGAR AL CARRITO
  addCarrito(id: any) {
    this.apiCarOrList.addProductCars(id);
  }
  addList(product: any) {
    this.apiCarOrList.addListDesire(product);
  }
  //PARA IR A COMPRAR EL PRODUCTO Y A SU VEZ REGISTRAR EL CARRITO
  comprarProduct(id: any, producto: any) {
    this.addCarrito(id);
    this.apiCarOrList.addDetalleCarrito(producto);
    this.idUsuario
      ? this.apiCarOrList.postCarritoItems(this.idUsuario)
      : this.irLogin();
  }
  //REGRESAR AL LOGIN
  irLogin() {
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
  }
}
