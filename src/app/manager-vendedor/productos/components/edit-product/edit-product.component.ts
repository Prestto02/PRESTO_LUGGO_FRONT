import { Component, OnInit } from '@angular/core';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { ProgressStriper } from './progress-edit/model/Progress.interface';
import { StripersModels } from './ProgressListEdit.interface';

@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit {
  arrayProgress: ProgressStriper[] = StripersModels;

  ruta: string = `${UrlFront.Manager.vendedor}/${UrlFront.Manager.listadoProductos}`;
  constructor() {}

  ngOnInit(): void {}
}
