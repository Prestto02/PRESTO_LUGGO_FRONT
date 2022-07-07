import { Component, OnInit } from '@angular/core';
import { DetalleArticuloForm } from '../../../models/Perchita/BaseFormAtributos';

@Component({
  selector: 'app-productos-atributos',
  templateUrl: './productos-atributos.component.html',
  styleUrls: ['./productos-atributos.component.css'],
})
export class ProductosAtributosComponent implements OnInit {
  constructor(public form: DetalleArticuloForm) {}

  ngOnInit(): void {
    console.log(this.form.DetalleArticulo.value);
  }
}
