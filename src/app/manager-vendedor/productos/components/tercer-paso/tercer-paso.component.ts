import { Component, OnInit } from '@angular/core';
import { ListadoProductosComponent } from '../listado-productos/listado-productos.component';
import { BaseFormTamanoProducto } from '../logistica-producto/models/BaseFormTamano';
import { BaseFormLogisticaProducto } from '../logistica-producto/models/BaseFormubicacion';

@Component({
  selector: 'app-tercer-paso',
  templateUrl: './tercer-paso.component.html',
  styleUrls: ['./tercer-paso.component.css'],
})
export class TercerPasoComponent implements OnInit {
  arrayTercerPaso = [
    {
      id: 1,
      nombre: 'Inventario y precios',
      disabled: true,
    },
    {
      id: 2,
      nombre: 'Entrega y Logística',
      disabled: false,
    },
  ];
  constructor(
    private componentListado: ListadoProductosComponent,
    public formUbicacion: BaseFormLogisticaProducto,
    public formTamano: BaseFormTamanoProducto
  ) {}

  ngOnInit(): void {}
  //GUARDAR PRODUCTO
  guardarProduct() {
    this.componentListado.guardarProduct();
  }
  //OCULTAR LAS SECCIONES SEGUN EL ID
  ocultarSecciones(id: any) {
    this.arrayTercerPaso.map((res: any) => {
      if (res.id === id) {
        res.disabled = true;
      } else {
        res.disabled = false;
      }
    });
  }
}
