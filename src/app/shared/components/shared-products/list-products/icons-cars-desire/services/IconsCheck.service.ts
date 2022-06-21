import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class IconCheckServices {
  private checkDesire = new BehaviorSubject<Array<any>>([]); //CREO El behaviorSUBJECT
  listCheckDesire = this.checkDesire.asObservable(); //OBTENGO EL BEHAVIORSUBJECT
  listCheck: any = [];
  constructor() {}

  //AGREGAR LOS PRODUCTOS SCROLL INFINITO
  addCheckDesire(dataObj: any) {
    this.listCheck.push(dataObj);
    this.checkDesire.next(this.listCheck); //GUARDO EN EL OBSERVABLE EL ARREGLO ASIGNADO
  }
  //ELIMINAR EL CHECK DE LA LISTA DE DESEO Y LA LISTA DEL PRODUCTO
  removeCheckDesire(id: any) {
    const data = this.listCheck.findIndex((res: any) => res === id);
    this.listCheck.splice(data, 1);
  }
}
