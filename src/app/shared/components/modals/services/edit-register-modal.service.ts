import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class EditRegisterModalService {
  private registerOrEdit = new BehaviorSubject<boolean>(false);
  registerOrEditBandera = this.registerOrEdit.asObservable();
  constructor() {}

  registerModal() {
    this.registerOrEdit.next(true);
  }
  editModal() {
    this.registerOrEdit.next(false);
  }
}
