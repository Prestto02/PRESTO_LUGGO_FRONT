import { Injectable } from '@angular/core';
import { ToastrService } from 'ngx-toastr';

@Injectable({
  providedIn: 'root',
})
export class MessageFrontEndService {
  constructor(private toastr: ToastrService) {}

  getSuccessMessage(title: any, message: any) {
    this.toastr.success(message, title);
  }
  getWarningMessage(title: any, message: any) {
    this.toastr.warning(message, title);
  }
  getDangerMessage(title: any, message: any) {
    this.toastr.error(message, title);
  }
  getInfoMessage(title: any, message: any) {
    this.toastr.info(message, title);
  }
}
