import { Component, OnInit } from '@angular/core';
import { BaseFormConfigAtributos } from './configuracion-atributos/models/BaseFormConfigAtributos';
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
      nombre: 'Talla',
      url: 'api/talla',
    },
    {
      id: 3,
      nombre: 'Tamaño',
      url: 'api/tamano',
    },
  ];
  nombreAtributo: any = '';
  descripcionAtributo: any = '';
  idColores: any;
  idTamanos: any;
  constructor(
    public formAtributos: BaseFormConfigAtributos, //CONFIG BASE FORM ATRIBUTOS
    public formAtributo: BaseFormConfigProducts //BASE FORM CONFIG PRODUCTS
  ) /* private apiAtributo: SelectAtributosService //PARA COLORES TALLAS,ETC */
  {}

  ngOnInit(): void {}
  //AGREGAR COLORS DE ITEMS
  addAtributosItems(e: any, nombre: any, id: any, url: any) {
    if (e.target.checked) {
      this.formAtributo.addAtributos(nombre, id, url); //AGREGO LOS COLORES
    } else {
      this.formAtributo.removeItemsChecked(nombre); //SI DESACTIVA LOS COLORES LO ELIMINO
    }
  }
  //AGREGAR VARIACIONES
  agregarVariaciones() {
    this.formAtributo.atributos.controls.map((res) => {
      this.nombreAtributo += res.value.nombre + ', ';
      this.descripcionAtributo += res.value.descripcion + ', '; //OBTENGO LA POSICION DEL ARREGLO PARA ELIMINARLO
      this.idColores = res.value.id;
    });
    this.nombreAtributo = this.nombreAtributo.slice(0, -2); //QUITAR LA ULTIMA ,
    this.descripcionAtributo = this.descripcionAtributo.slice(0, -2); //QUITAR LA ULTIMA ,
    //LIMPIAR LAS VARIABLES
    this.formAtributo.removeAllArrayAtributos(); //DEJAR EN BLANCO EL ARRAY DE ATRIBUTOS
    this.checkFalse(); //SETEAR A FALSO TODOS LOS CHECK
    this.nombreAtributo = '';
    this.descripcionAtributo = '';
  }
  /*   //ENVIAR TODOS LOS ATRIBUTOS
  findAtributosControls() {
    return this.formAtributo.atributos.controls.map((res) => {
      return this.postAtributosVariacion(
        res.value.url,
        res.value.codigoHexagedecima
      );
    });
  }
  //AGREGAR NUEVOS ATRIBUTOS Y VARIACIONES
  postAtributosVariacion(url: any, form: any) {
    return this.apiAtributo
      .postAtributos(url, { codigoHexagedecima: form })
      .subscribe((res: any) => {
        return res;
      });
  } */
  //PONER TODOS LOS CHECK EN BLANCO
  checkFalse() {
    this.arrayAtributos.map((res: any) => {
      const checke: any = <HTMLElement>document.getElementById(res.id); //OBTENGO EL ELEMENTO CHECBOX PARA CAMBIARLE EL ESTADO DEL DOM
      checke.checked = false; //SETEO A FALSO
    });
  }
  //ELIMINAR LOS ITEMS DEL ARRAY FORM
  removeItemsChecked(i: any) {
    const datos = this.formAtributo.atributos.controls[i]; //OBTENGO LA POSICION DEL ARREGLO
    const checke: any = <HTMLElement>document.getElementById(datos.value.id); //OBTENGO EL ELEMENTO CHECBOX PARA CAMBIARLE EL ESTADO DEL DOM
    checke.checked = false; //SETEO A FALSO
    this.formAtributo.removeItems(i); //ELIMINO DEL TODO DEL ARREGLO
  }
}
