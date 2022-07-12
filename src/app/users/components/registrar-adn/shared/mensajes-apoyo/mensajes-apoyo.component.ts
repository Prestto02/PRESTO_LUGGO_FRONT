import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes-apoyo',
  templateUrl: './mensajes-apoyo.component.html',
  styleUrls: ['./mensajes-apoyo.component.css'],
})
export class MensajesApoyoComponent implements OnInit {
  @Input('mensaje') mensaje: any | null = null;
  constructor() {}

  ngOnInit(): void {}
}
