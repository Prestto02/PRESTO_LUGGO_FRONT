import { Component } from '@angular/core';
import { BaseFormAdnUsers } from '../models/BaseFormAdnUser';
import { BaseFormNegocioAdn } from '../models/BaseFormNegocio';
import { BaseFormPagosAdn } from '../models/BaseFormPagosAdn';
import { BaseFormTerminarAdn } from '../models/BaseFormTerminar';

@Component({
  selector: 'app-terminar-registro',
  templateUrl: './terminar-registro.component.html',
  styleUrls: ['./terminar-registro.component.css'],
})
export class TerminarRegistroComponent {
  constructor(
    public formAdn: BaseFormAdnUsers,
    public formNegocioAdn: BaseFormNegocioAdn,
    public formPagosAdn: BaseFormPagosAdn,
    public formB: BaseFormTerminarAdn
  ) {}
}
