import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { PosicionService } from '../services/posicion.service';

@Injectable({ providedIn: 'root' })
export class PositionUser {

  public latitud: any;
  public longitud: any;
  constructor(private serviPosition: PosicionService) {}

  getPositionUser() {
    this.serviPosition.getPosition().then(
      (pos) => {
        this.latitud = pos.latitude; //OBTENGO LA LATITUDE
        this.longitud = pos.longitude; //OBTENGO LA LONGITUD
      },
      (err) => {
        console.log(err);
      }
    );

  }

}
