import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class MessageFrontEndService {
  constructor(private toastr: ToastrService) {}
  //SUCCESS
  getSuccessMessage(title: any, message: any) {
    //{ toastClass: 'modificColor ngx-toastr' } PARA MODIFICAR LOS COLORES DEL TOAST
    this.toastr.success(message, title);
  }
  //WARNING
  getWarningMessage(title: any, message: any) {
    this.toastr.warning(message, title);
  }
  //DANGER
  getDangerMessage(title: any, message: any) {
    this.toastr.error(message, title, /* {
      toastClass: 'newColorDanger ngx-toastr',
    } */);
  }
  //INFO
  getInfoMessage(title: any, message: any) {
    this.toastr.info(message, title);
  }
}
