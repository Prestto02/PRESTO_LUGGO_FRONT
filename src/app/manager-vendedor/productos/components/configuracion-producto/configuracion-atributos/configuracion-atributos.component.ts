import { Component, OnInit } from '@angular/core';
import { BaseFormConfigProducts } from '../models/BaseFormCongifProduct';
import { BaseFormConfigAtributos } from './models/BaseFormConfigAtributos';

@Component({
  selector: 'app-configuracion-atributos',
  templateUrl: './configuracion-atributos.component.html',
  styleUrls: ['./configuracion-atributos.component.css'],
})
export class ConfiguracionAtributosComponent implements OnInit {
  constructor(
    public formAtributos: BaseFormConfigAtributos,
    public formConfigProduct: BaseFormConfigProducts
  ) {}

  ngOnInit(): void {}
  //ELIMINAR LOS ITEMS DEL ARRAY FORM
  removeItemsChecked(i: any) {
    this.formAtributos.removeItems(i); //ELIMINO DEL TODO DEL ARREGLO
  }
}
