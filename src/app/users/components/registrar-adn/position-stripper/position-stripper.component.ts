import { Component, Input, OnInit } from '@angular/core';
import { BaseFormAdnUsers } from '../models/BaseFormAdnUser';
import { BaseFormNegocioAdn } from '../models/BaseFormNegocio';
import { BaseFormPagosAdn } from '../models/BaseFormPagosAdn';
import { BaseFormTerminarAdn } from '../models/BaseFormTerminar';

@Component({
  selector: 'app-position-stripper',
  templateUrl: './position-stripper.component.html',
  styleUrls: ['./position-stripper.component.css'],
})
export class PositionStripperComponent implements OnInit {
  @Input('width') width: string | null = null;
  @Input('paso1') paso1: string | null = null;
  @Input('paso2') paso2: string | null = null;
  @Input('paso3') paso3: string | null = null;
  @Input('paso4') paso4: string | null = null;
  @Input('one') one: string | null = null;
  @Input('two') two: string | null = null;
  @Input('trhee') trhee: string | null = null;
  @Input('four') four: string | null = null;

  constructor(
    public formAdn: BaseFormAdnUsers,
    public formNegocioAdn: BaseFormNegocioAdn,
    public formPagosAdn: BaseFormPagosAdn,
    public formB: BaseFormTerminarAdn
  ) {}

  ngOnInit(): void {}
}
