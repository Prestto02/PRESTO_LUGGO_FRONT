import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class MessageFrontEndService {
  constructor(private toastr: ToastrService) {}
  //SUCCESS
  getSuccessMessageListDesire(title: any, message: any) {
    //PARA MODIFICAR LOS COLORES DEL TOAST
    this.toastr.success(title, message, {
      toastClass: 'newColorListDerise ngx-toastr',
    });
  }
  getSuccessMessageCarrito(title: any, message: any) {
    this.toastr.success(title, message, {
      toastClass: 'newColorCars ngx-toastr',
    });
  }
  //WARNING
  getWarningMessage(title: any, message: any) {
    this.toastr.warning(message, title,{
      toastClass: 'newColorWarning ngx-toastr',
    });
  }
  //DANGER
  getDangerMessage(title: any, message: any) {
    this.toastr.error(message, title, {
      toastClass: 'newColorDanger ngx-toastr',
    });
  }
  //INFO
  getInfoMessage(title: any, message: any) {
    this.toastr.info(message, title, {
      toastClass: 'newColorInfo ngx-toastr',
    });
  }
}
