import { Component, Input, OnInit } from '@angular/core';
import { BaseFormConfigAtributos } from '../configuracion-atributos/models/BaseFormConfigAtributos';
import { BaseFormConfigProducts } from '../models/BaseFormCongifProduct';
import { BaseFormColors } from './models/BaseFormColors';
import { ServicesColorService } from './services/services-color.service';

@Component({
  selector: 'app-configuracion-color',
  templateUrl: './configuracion-color.component.html',
  styleUrls: ['./configuracion-color.component.css'],
})
export class ConfiguracionColorComponent implements OnInit {
  @Input('nombre') nombre: string | null = null;
  @Input('url') url: string | null = null;
  arrayColores: any = [];
  arrayAtributosAny: any = [];
  nameColor: string = '';
  constructor(
    private apiServiColor: ServicesColorService,
    public formColor: BaseFormColors,
    private baseFormProductConfig: BaseFormConfigProducts
  ) {}

  ngOnInit(): void {
    this.getAllColors(); //TRAIGO TODOS LOS COLORES
  }
  //TRAER TODOS LOS COLORES
  getAllColors() {
    this.apiServiColor.getAllColors().subscribe((res) => {
      this.arrayColores = res; //OBTENGO TODOS LOS COLORES
    });
  }
  //AGREGAR COLORES ITEMS AL ARRAY FORM
  addColoresItems(
    colorHexadecimal: any,
    nameColor: any,
    e: any,
    id: any,
    nombre: any
  ) {
    if (e.target.checked) {
      this.formColor.addColorVariacion(colorHexadecimal, nameColor, id); //AGREGO LOS COLORES
      this.buscarAtributoVariacion(nombre, nameColor);
    } else {
      this.formColor.removeItemsChecked(nameColor); //SI DESACTIVA LOS COLORES LO ELIMINO
    }
  }

  //BUSCAR Y ASIGNAR PATCHVALUE SEGUN POSICION DEL ARREGLO
  buscarAtributoVariacion(nombre: any, nameColor: any) {
    const result = this.baseFormProductConfig.atributos.controls.findIndex(
      (res) => {
        return res.value.nombre == nombre;
      }
    );
    this.baseFormProductConfig.atributos.at(result).patchValue({
      escoger: nameColor,
    });
  }
  //ELIMINAR LOS ITEMS DEL ARRAY FORM
  removeItemsChecked(i: any) {
    const datos = this.formColor.colores.controls[i]; //OBTENGO LA POSICION DEL ARREGLO
    const checke: any = <HTMLElement>(
      document.getElementById('checkbox' + datos.value.id)
    ); //OBTENGO EL ELEMENTO CHECBOX PARA CAMBIARLE EL ESTADO DEL DOM
    checke.checked = false; //SETEO A FALSO
    this.formColor.removeItems(i); //ELIMINO DEL TODO DEL ARREGLO
  }
  //AGREGAR A  COLORES
  agregarColor() {
    console.log('agregado');
  }
  buscarAtributos(url: any) {
    this.apiServiColor.getAllAtributos(url).subscribe((res) => {
      this.arrayAtributosAny = res;
    });
  }
  //CHECK COLOR
  clickCheckedColor(id: any) {
    const checke: any = <HTMLElement>document.getElementById('btncheck-' + id);
    const label: any = <HTMLElement>document.getElementById('label-' + id);
    if (checke.checked) {
      label.style.backgroundColor = '#DBF6FF';
    } else {
      label.style.backgroundColor = '#fff';
    }
  }
}
