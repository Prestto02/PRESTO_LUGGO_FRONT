import { Component, Input } from '@angular/core';
import { ItemsProductsVerify } from 'src/app/shared/helpers/ItemsProductsVerify';

@Component({
  selector: 'app-input-product',
  templateUrl: './input-products.component.html',
  styleUrls: ['./input-products.component.css'],
})
export class InputProductsComponents {
  @Input('productObjeto') productObjeto: any | null = null;
  constructor(private verifyInput: ItemsProductsVerify) {}

  //VERIFYCHANGE USER
  verifyChange(e: any, res: any) {
    this.verifyInput.verifyChangeInputsJSON(e, res); //VERIFICO EL INPUTS CHANGE
  }
  //DESCREMENT
  descrement(res: any) {
    this.verifyInput.descrementsItemsJSON(res); //ENVIO A VERIFICAR EL DESREMENTO
  }
  //INCREMENTAR ITEMS
  increment(res: any) {
    this.verifyInput.incrementItemsJSON(res); //INCREMENT ITEMS
  }
}
