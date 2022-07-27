import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { urlApiAzure } from 'src/app/shared/routes/RoutesApiAzure';
import { ModelsImgOfertas } from '../arrayOfertasImagen';

@Injectable({ providedIn: 'root' })
export class BannersCardsOFertas {
  constructor(private http: HttpClient) {}

  getElementsBannersOfertas(): Observable<ModelsImgOfertas[]> {
    return this.http.get<ModelsImgOfertas[]>(
      `${urlApiAzure.UrlApi}${urlApiAzure.bannersCruzIndex}`
    );
  }
}
