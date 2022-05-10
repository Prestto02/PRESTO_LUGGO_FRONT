import { Component, OnInit } from '@angular/core';
import { BaseFormColors } from './configuracion-color/models/BaseFormColors';
import { BaseFormTamano } from './configuracion-tamano/models/BaseFormTamano';
import { BaseFormConfigProducto } from './models/BaseFormConfiProducto';

@Component({
  selector: 'app-configuracion-producto',
  templateUrl: './configuracion-producto.component.html',
  styleUrls: ['./configuracion-producto.component.css'],
})
export class ConfiguracionProductoComponent implements OnInit {
  constructor(
    public formB: BaseFormConfigProducto,
    public formColor: BaseFormColors,
    public formTamano: BaseFormTamano
  ) {}

  ngOnInit(): void {}
}
