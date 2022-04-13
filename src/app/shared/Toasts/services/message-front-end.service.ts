import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class MessageFrontEndService {
  constructor(private toastr: ToastrService) {}
  //SUCCESS
  getSuccessMessage(title: any, message: any) {
    this.toastr.success(message, title);
  }
  //WARNING
  getWarningMessage(title: any, message: any) {
    this.toastr.warning(message, title);
  }
  //DANGER
  getDangerMessage(title: any, message: any) {
    this.toastr.error(message, title);
  }
  //INFO
  getInfoMessage(title: any, message: any) {
    this.toastr.info(message, title);
  }
}
