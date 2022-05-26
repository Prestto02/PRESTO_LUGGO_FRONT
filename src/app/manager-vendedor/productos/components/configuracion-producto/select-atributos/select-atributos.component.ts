import { Component, Input, OnInit } from '@angular/core';
import { BaseFormConfigProducts } from '../models/BaseFormCongifProduct';
import { SelectAtributosService } from './services/select-atributos.service';

@Component({
  selector: 'app-select-atributos',
  templateUrl: './select-atributos.component.html',
  styleUrls: ['./select-atributos.component.css'],
})
export class SelectAtributosComponent implements OnInit {
  @Input('url') url: any;
  @Input('nombre') nombre: any;
  @Input('id') id: any;
  arrayColores: any;
  arrayOtrosAtributos: any;
  constructor(
    private apSelectAtributo: SelectAtributosService,
    private formConfig: BaseFormConfigProducts
  ) {}

  ngOnInit(): void {
    this.getAllColors();
  }
  //TODOS LOS ATRIBUTOS
  getAllColors() {
    this.apSelectAtributo.getColorsAtributos().subscribe((res) => {
      this.arrayColores = res;
    });
  }
  //OTROS ATRIBUTOS
  getAllAtributosOtros(url: any) {
    this.apSelectAtributo.getDataAtributos(url).subscribe((res) => {
      this.arrayOtrosAtributos = res;
    });
  }

  //
  ingresarDatosAlInput(id: any, nombre: any) {
    const data = this.formConfig.atributos.controls[id];
    data.patchValue({
      id_atributo: id,
      escoger: nombre,
    });
  }
}
