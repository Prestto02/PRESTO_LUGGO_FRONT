import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PositionUser } from 'src/app/shared/class/PositionUser';
import { MessageFrontEndService } from 'src/app/shared/Toasts/services/message-front-end.service';
import { DataFormAdn } from '../helpers/DataFormAdnUsers';
import { BaseFormAdnUsers } from '../models/BaseFormAdnUser';
import { BaseFormNegocioAdn } from '../models/BaseFormNegocio';
import { BaseFormPagosAdn } from '../models/BaseFormPagosAdn';
import { BaseFormTerminarAdn } from '../models/BaseFormTerminar';
import { UserAdnService } from '../services/user-adn.service';

@Component({
  selector: 'app-terminar-registro',
  templateUrl: './terminar-registro.component.html',
  styleUrls: ['./terminar-registro.component.css'],
})
export class TerminarRegistroComponent implements OnInit {
  constructor(
    public formAdn: BaseFormAdnUsers,
    public formNegocioAdn: BaseFormNegocioAdn,
    public formPagosAdn: BaseFormPagosAdn,
    public formB: BaseFormTerminarAdn
  ) {}

  ngOnInit(): void {}
}
