import { Component, Input, OnInit } from '@angular/core';
import { ItemsProductsVerify } from '../../helpers/ItemsProductsVerify';
@Component({
  selector: 'app-input-increase-diminish',
  templateUrl: './input-increase-diminish.component.html',
  styleUrls: ['./input-increase-diminish.component.css'],
})
export class InputIncreaseDiminishComponent implements OnInit {
  @Input('carritoProductList') carritoProductList: any | null = null;
  @Input('colorsButton') colorsButton: string | null = null;
  @Input('widthInput') widthInput: string = 'width:40%';
  @Input('buttonWidth') buttonWidth: string = 'min-width:25%';
  constructor(private verifyInput: ItemsProductsVerify) {}

  ngOnInit(): void {}
  //VERIFYCHANGE USER
  verifyChange(e: any, res: any) {
    this.verifyInput.verifyChangeInputsJSON(e, res); //VERIFICO EL INPUTS CHANGE
  }
  //DESCREMENT INPUT TARGET ITEMS
  descrement(res: any) {
    this.verifyInput.descrementsItemsJSON(res); //ENVIO A VERIFICAR EL DESREMENTO
  }
  //INCREMENTAR ITEMS
  increment(res: any) {
    this.verifyInput.incrementItemsJSON(res); //INCREMENT ITEMS
  }
}
