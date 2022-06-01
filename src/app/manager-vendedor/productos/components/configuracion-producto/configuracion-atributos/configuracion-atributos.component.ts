import { Component, OnInit } from '@angular/core';
import { BaseFormConfigProducts } from '../models/BaseFormCongifProduct';
import { BaseFormConfigAtributos } from './models/BaseFormConfigAtributos';
import { BaseFormConfigAtributos2 } from './models/BaseFormConfigAtributos2';
import { BaseFormGlobalPrecio } from './models/BasePrecioGlobal';

@Component({
  selector: 'app-configuracion-atributos',
  templateUrl: './configuracion-atributos.component.html',
  styleUrls: ['./configuracion-atributos.component.css'],
})
export class ConfiguracionAtributosComponent implements OnInit {
  constructor(
    public formAtributos: BaseFormConfigAtributos,
    public formConfigProduct: BaseFormConfigProducts,
    public formGlobalPrecio: BaseFormGlobalPrecio,
    public formAtributosDos: BaseFormConfigAtributos2
  ) {}

  ngOnInit(): void {}
  //ELIMINAR LOS ITEMS DEL ARRAY FORM
  removeItemsChecked(i: any) {
    this.formAtributos.removeItems(i); //ELIMINO DEL TODO DEL ARREGLO
  }

  agregarPrecioGlobal() {
    const precio =
      this.formGlobalPrecio.formGlobalPrecio.get('PrecioGlobal')?.value;
    //RECORRO EL ARRAY  PARA SETEARLOS EN LOS FORM GROUP DE PRECIO POR VARIACION
    this.formAtributos.atributosVariacion.controls.map((res: any, i: any) => {
      this.formAtributos.atributosVariacion.at(i).patchValue({
        PrecioPorVariacion: precio,
      });
    });
  }
}
