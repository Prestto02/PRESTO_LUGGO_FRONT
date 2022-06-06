import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RepositorioImg } from '../shared/helpers/RepositorioImg';
import { UrlFront } from '../shared/routes/RoutesFront';

@Component({
  selector: 'app-manager-vendedor',
  templateUrl: './manager-vendedor.component.html',
  styleUrls: ['./manager-vendedor.component.css'],
})
export class ManagerVendedorComponent implements OnInit {
  imagenPuerto = `${RepositorioImg.urlRepositorio}img/IMÁGENES/puerttoImg.png`;
  imgEtiqueta = `${RepositorioImg.urlRepositorio}img/IMÁGENES/etiquetasAdn.png`;
  imgBilletera = `${RepositorioImg.urlRepositorio}img/IMÁGENES/billeteraAdn.png`;
  constructor(private _router:Router) {}

  ngOnInit(): void {}

  irAlModuloCatalogo(){
    this._router.navigateByUrl(`${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.listadoProductos}`)
  }
}
