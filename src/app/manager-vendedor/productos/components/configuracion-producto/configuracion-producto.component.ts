import { Component, OnInit } from '@angular/core';
import { BaseFormColors } from './configuracion-color/models/BaseFormColors';
import { BaseFormTamano } from './configuracion-tamano/models/BaseFormTamano';

@Component({
  selector: 'app-configuracion-producto',
  templateUrl: './configuracion-producto.component.html',
  styleUrls: ['./configuracion-producto.component.css'],
})
export class ConfiguracionProductoComponent implements OnInit {
  arrayAtributos: any = [
    {
      id: 1,
      nombre: 'Color',
    },
    {
      id: 2,
      nombre: 'Tamaño',
    },
  ];
  constructor(
    public formColor: BaseFormColors,
    public formTamano: BaseFormTamano
  ) {}

  ngOnInit(): void {}

  meDistesClick(e: any) {
    console.log(e);
  }
}
