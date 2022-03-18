import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class PosicionService {
  public location: any;
  constructor() {}
  //OBTENER LA LATITUDE Y LONGITUD
  getPosition() {
    const location = !navigator.geolocation
      ? console.log('No se a accedio a la localizacion')
      : navigator.geolocation.getCurrentPosition((position) => {
          return {
            lat: position.coords.latitude,
            long: position.coords.longitude,
          };
        });
   return console.log(location);
  }
}
