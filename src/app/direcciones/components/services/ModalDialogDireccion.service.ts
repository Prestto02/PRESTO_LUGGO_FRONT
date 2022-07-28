import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class ModalDialog {
  private modalDialog = new BehaviorSubject<boolean>(false);

  modalDialog$ = this.modalDialog.asObservable();
  constructor() {}
  /* STATE MODAL */
  setStateModal(type: boolean): void {
    this.modalDialog.next(type);
  }
}
