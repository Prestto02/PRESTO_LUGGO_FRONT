import { HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({ providedIn: 'root' })
export class HandleErrorServices {
  constructor(private toaster: ToastrService) {}

  public handleError(err: HttpErrorResponse) {
    let errorMessage: string; //ENVIAR EL MENSAJE AL TOAST
    if (err.error instanceof ErrorEvent) {
      errorMessage = `Ocurrio un error: ${err.error.message}`;
    } else {
      switch (
        err.status //RECUPERO EL ESTADO DEL ERROR
      ) {
        case 401:
          errorMessage = `${err.error}`;
          break;
        case 400:
          errorMessage = `${err.error}`;
          break;
        case 403:
          errorMessage = `${err.error}`;
          break;
        case 404:
          errorMessage = `${err.error}`;
          break;
        case 500:
          errorMessage = `No se encontro el servidor`;
          break;
        case 502:
          errorMessage = `Repuesta inválida por parte del servidor`;
          break;
        case 504:
          errorMessage = `El servidor esta tardando en responder la solicitud`;
          break;
        default:
          errorMessage = 'Algo salio mal intentelo mas tarde';
      }
      this.toaster.error(errorMessage);
    }
  }
}
