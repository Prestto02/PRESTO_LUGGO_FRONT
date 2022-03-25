import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PosicionService {
  constructor() {}
  //OBTENER LA LATITUDE Y LONGITUD
  getPosition(): Promise<any> {
    return new Promise((resolve, reject) => {
      navigator.geolocation.getCurrentPosition(
        (resp) => {
          resolve({
            longitude: resp.coords.longitude,
            latitude: resp.coords.latitude,
          });
        },
        (err) => {
          reject(err);
        }
      );
    });
  }
}
