import { Component, Input, OnInit } from '@angular/core';
import { EditRegisterModalService } from './services/edit-register-modal.service';
@Component({
  selector: 'app-modals',
  templateUrl: './modals.component.html',
  styleUrls: ['./modals.component.css'],
})
export class ModalsComponent implements OnInit {
  @Input('id') id: string | null = null;
  @Input('modaltamano') modaltamano: string | null = null;
  @Input('modal-header-primary') modalheaderPrimary: string | null = null;
  @Input('modal-header-secondary') modalheaderSecondary: string | null = null;
  @Input('title-primary') titlePrimary: string | null = null;
  @Input('title-secondary') titleSecondary: string | null = null;
  titleRegisterOrEdit = false;
  constructor(private serviModal: EditRegisterModalService) {}

  ngOnInit(): void {
    this.getMOdalService();
  }

  getMOdalService() {
    this.serviModal.registerOrEditBandera.subscribe((res) => {
      this.titleRegisterOrEdit = res;
    });
  }
}
