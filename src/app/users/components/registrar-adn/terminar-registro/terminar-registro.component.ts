import { Component, OnInit } from '@angular/core';
import { BaseFormTerminarAdn } from '../models/BaseFormTerminar';

@Component({
  selector: 'app-terminar-registro',
  templateUrl: './terminar-registro.component.html',
  styleUrls: ['./terminar-registro.component.css'],
})
export class TerminarRegistroComponent implements OnInit {
  constructor(public formB: BaseFormTerminarAdn) {}

  ngOnInit(): void {}
}
