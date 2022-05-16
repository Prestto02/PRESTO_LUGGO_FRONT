import { Component, OnInit } from '@angular/core';
import { BaseFormConfigAtributos } from './configuracion-atributos/models/BaseFormConfigAtributos';
import { BaseFormColors } from './configuracion-color/models/BaseFormColors';
import { BaseFormConfigProducts } from './models/BaseFormCongifProduct';

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
      url: 'api/color',
    },
    {
      id: 2,
      nombre: 'Tamaño',
      url: 'api/tamano',
    },
    {
      id: 3,
      nombre: 'Talla',
      url: 'api/talla',
    },
  ];
  nombre: any = '';
  atributo: any = '';
  constructor(
    public formAtributos: BaseFormConfigAtributos, //CONFIG BASE FORM ATRIBUTOS
    public formAtributo: BaseFormConfigProducts //BASE FORM CONFIG PRODUCTS
  ) {}

  ngOnInit(): void {}
  //AGREGAR COLORS DE ITEMS
  addColoresItems(e: any, nombre: any, id: any) {
    if (e.target.checked) {
      this.formAtributo.addAtributos(nombre, id); //AGREGO LOS COLORES
    } else {
      this.formAtributo.removeItemsChecked(nombre); //SI DESACTIVA LOS COLORES LO ELIMINO
    }
  }
  //AGREGAR VARIACIONES
  agregarVariaciones() {
    this.formAtributo.atributos.controls.map((res) => {
      console.log(res.value.nombre, res.value.descripcion);
      this.nombre += res.value.nombre + ',';
      this.atributo += res.value.descripcion + ','; //OBTENGO LA POSICION DEL ARREGLO PARA ELIMINARLO
    });
    this.formAtributos.addAtributosVariacion(this.nombre, this.atributo, 1); //SEA AGREGA A LA NUEVA LISTA
  }
  //ELIMINAR LOS ITEMS DEL ARRAY FORM
  removeItemsChecked(i: any) {
    const datos = this.formAtributo.atributos.controls[i]; //OBTENGO LA POSICION DEL ARREGLO
    const checke: any = <HTMLElement>document.getElementById(datos.value.id); //OBTENGO EL ELEMENTO CHECBOX PARA CAMBIARLE EL ESTADO DEL DOM
    checke.checked = false; //SETEO A FALSO
    this.formAtributo.removeItems(i); //ELIMINO DEL TODO DEL ARREGLO
  }
}
