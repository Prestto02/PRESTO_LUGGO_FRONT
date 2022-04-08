import { Component, Input, OnInit } from '@angular/core';
import { EditRegisterModalService } from './services/edit-register-modal.service';
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css'],
})
export class ModalsComponent implements OnInit {
  // @Input('titleRegisterOrEdit') titleRegisterOrEdit: string | null = null;
  titleRegisterOrEdit = false;
  constructor(private serviModal: EditRegisterModalService) {}

  ngOnInit(): void {
    this.getMOdalService();
  }

  getMOdalService() {
    this.serviModal.registerOrEditBandera.subscribe((res) => {
      this.titleRegisterOrEdit = res;
      console.log(this.titleRegisterOrEdit);
    });
  }
}
