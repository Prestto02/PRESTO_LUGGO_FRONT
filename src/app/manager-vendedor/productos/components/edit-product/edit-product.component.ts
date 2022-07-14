import { Component, OnInit } from '@angular/core';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  ruta: string = `${UrlFront.Manager.vendedor}/${UrlFront.Manager.listadoProductos}`;
  constructor() {}

  ngOnInit(): void {}
}
