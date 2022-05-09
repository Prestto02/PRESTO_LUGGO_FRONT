import { Component, OnInit } from '@angular/core';
import { BaseFormTamano } from './models/BaseFormTamano';

@Component({
  selector: 'app-configuracion-tamano',
  templateUrl: './configuracion-tamano.component.html',
  styleUrls: ['./configuracion-tamano.component.css'],
})
export class ConfiguracionTamanoComponent implements OnInit {
  arrayTamano: any = [
    {
      id: 1,
      nombre_tamano: 'XS',
    },
    {
      id: 2,
      nombre_tamano: 'S',
    },
    {
      id: 3,
      nombre_tamano: 'M',
    },
    {
      id: 4,
      nombre_tamano: 'G',
    },
    {
      id: 5,
      nombre_tamano: 'L',
    },
    {
      id: 6,
      nombre_tamano: 'XL',
    },
    {
      id: 7,
      nombre_tamano: 'XXL',
    },
    {
      id: 8,
      nombre_tamano: 'XXXL',
    },
    {
      id: 9,
      nombre_tamano: 'TN9',
    },
  ];
  constructor(public formB: BaseFormTamano) {}

  ngOnInit(): void {}
  //AGREGAR TAMANO
  addTamanoItems(name: any, id: any, e: any) {
    const checked: any = <HTMLElement>(
      document.getElementById('color-check-' + id)
    ); //CONSULTO QUE CHECK FUE ACTIVADO
    if (e.target.checked) {
      this.formB.addTamanoVariacion(name, id); //AGREGO LOS COLORES
      checked.style.backgroundColor = '#DBF6FF'; //CAMBIO EL COLOR DEL CHECKED
    } else {
      this.formB.removeItemsChecked(name); //SI DESACTIVA LOS COLORES LO ELIMINO
      checked.style.backgroundColor = '#f8f9fa'; //CAMBIO EL COLOR DEL CHECKED
    }
  }
  //ELIMINAR ITEMS CHECKED
  removeItemsChecked(i: any) {
    const datos = this.formB.tamano.controls[i]; //OBTENGO LA POSICION DEL ARREGLO
    const checke: any = <HTMLElement>(
      document.getElementById('checkbox-' + datos.value.id)
    ); //OBTENGO EL ELEMENTO CHECBOX PARA CAMBIARLE EL ESTADO DEL DOM
    const checked: any = <HTMLElement>(
      document.getElementById('color-check-' + datos.value.id)
    ); //CONSULTO QUE CHECK FUE ACTIVADO
    checke.checked = false; //SETEO A FALSO
    checked.style.backgroundColor = '#f8f9fa'; //CAMBIO EL COLOR DEL CHECKED
    this.formB.removeItems(i); //ELIMINO DEL TODO DEL ARREGLO
  }
}
