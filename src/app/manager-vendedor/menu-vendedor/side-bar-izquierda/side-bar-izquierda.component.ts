import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Component({
  selector: 'app-side-bar-izquierda',
  templateUrl: './side-bar-izquierda.component.html',
  styleUrls: ['./side-bar-izquierda.component.css'],
})
export class SideBarIzquierdaComponent implements OnInit {
  constructor(private _route: Router) {}

  ngOnInit(): void {}
  //PARA IR A LA RUTA DE DASHBOARD
  irDashBoard() {
    this._route.navigateByUrl(
      `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.dashborad}`
    );
  }
  irProductos() {
    this._route.navigateByUrl(
      `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.listadoProductos}`
    );
  }
  irListaPedidos() {
    this._route.navigateByUrl(
      `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.listaDePedidos}`
    );
  }
}
