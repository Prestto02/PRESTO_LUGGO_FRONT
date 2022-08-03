import {
  Component,
  Input,
  OnChanges,
  OnInit,
  SimpleChanges,
} from '@angular/core';
import { BaseFormConfigProducts } from '../models/BaseFormCongifProduct';
import { BaseFormConfigAtributos } from './models/BaseFormConfigAtributos';
import { BaseFormConfigAtributos2 } from './models/BaseFormConfigAtributos2';
import { BaseFormGlobalPrecio } from './models/BasePrecioGlobal';

@Component({
  selector: 'app-configuracion-atributos',
  templateUrl: './configuracion-atributos.component.html',
  styleUrls: ['./configuracion-atributos.component.css'],
})
export class ConfiguracionAtributosComponent implements OnInit, OnChanges {
  @Input('productEdit') productEdit: any | null = null;
  resultIva: any = '';
  resultIC: any = '';
  Total: any = 0;
  constructor(
    public formAtributos: BaseFormConfigAtributos,
    public formConfigProduct: BaseFormConfigProducts,
    public formGlobalPrecio: BaseFormGlobalPrecio,
    public formAtributosDos: BaseFormConfigAtributos2
  ) {}
  ngOnChanges(changes: SimpleChanges): void {
    if (changes.productEdit.currentValue != changes.productEdit.previousValue) {
      this.productEdit = changes.productEdit.currentValue;
      this.editProductSet();
    }
  }

  ngOnInit(): void {
    // this.editProductSet();
  }
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
  //CALCULO DEL IVA
  checkIva(e: any) {
    if (e.target.checked) {
      this.verifyCheckIvaEdit();
    } else {
      this.Total = this.Total - this.resultIva;
      this.resultIva = '';
    }
  }
  //VERIFY CHECK EDIT CALCULATE
  verifyCheckIvaEdit() {
    const datos: any =
      this.formAtributosDos.formAtributosDos.get('PrecioGlobal')?.value;
    this.resultIva = datos * 0.12;
    this.Total = datos * 1.12 + this.resultIC;
  }
  //VERIFY CHECK EDIT CALCULATE
  verifyCheckIceEdit() {
    const datos: any =
      this.formAtributosDos.formAtributosDos.get('PrecioGlobal')?.value;
    this.resultIC = datos * 0.15;
    this.Total = datos * 1.15 + this.resultIva;
  }
  changePrecioG(e: any) {
    const iva = this.formAtributosDos.formAtributosDos.get('Iva')?.value;
    const ice = this.formAtributos.formConfigAtributos.get('Ice')?.value;
    if (iva) this.verifyCheckIvaEdit();
    if (ice) this.verifyCheckIceEdit();
  }
  //CALCULO DE ICE
  checkIce(e: any) {
    if (e.target.checked) {
      this.verifyCheckIceEdit();
    } else {
      this.Total = this.Total - this.resultIC;
      this.resultIC = '';
    }
  }
  editProductSet() {
    if (this.productEdit) {
      this.setProduct();
      this.verifyCheckIvaEdit();
      this.verifyCheckIceEdit();
    }
  }

  setProduct() {
    this.formAtributosDos.setFormEdit(this.productEdit);
  }
}
