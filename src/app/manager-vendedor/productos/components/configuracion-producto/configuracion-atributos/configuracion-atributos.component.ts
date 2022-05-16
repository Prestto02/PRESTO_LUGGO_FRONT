import { Component, OnInit } from '@angular/core';
import { BaseFormConfigAtributos } from './models/BaseFormConfigAtributos';

@Component({
  selector: 'app-configuracion-atributos',
  templateUrl: './configuracion-atributos.component.html',
  styleUrls: ['./configuracion-atributos.component.css'],
})
export class ConfiguracionAtributosComponent implements OnInit {
  //arrayColores: any = [];
  constructor(
    //private apiServiColor: ServicesColorService,
    public formAtributos: BaseFormConfigAtributos
  ) {}

  ngOnInit(): void {
    // this.getAllColors(); //TRAIGO TODOS LOS COLORES
  }
  //TRAER TODOS LOS COLORES
  /*  getAllColors() {
    this.apiServiColor.getAllColors().subscribe((res) => {
      this.arrayColores = res; //OBTENGO TODOS LOS COLORES
    });
  }*/
  //AGREGAR COLORES ITEMS AL ARRAY FORM
  addColoresItems(colorHexadecimal: any, nameColor: any, e: any, id: any) {
    if (e.target.checked) {
      this.formAtributos.addAtributosVariacion(colorHexadecimal, nameColor, id); //AGREGO LOS COLORES
    } else {
      this.formAtributos.removeItemsChecked(nameColor); //SI DESACTIVA LOS COLORES LO ELIMINO
    }
  }
  //ELIMINAR LOS ITEMS DEL ARRAY FORM
  removeItemsChecked(i: any) {
    const datos = this.formAtributos.atributosVariacion.controls[i]; //OBTENGO LA POSICION DEL ARREGLO
    const checke: any = <HTMLElement>(
      document.getElementById('checkbox' + datos.value.id)
    ); //OBTENGO EL ELEMENTO CHECBOX PARA CAMBIARLE EL ESTADO DEL DOM
    checke.checked = false; //SETEO A FALSO
    this.formAtributos.removeItems(i); //ELIMINO DEL TODO DEL ARREGLO
  }
}
