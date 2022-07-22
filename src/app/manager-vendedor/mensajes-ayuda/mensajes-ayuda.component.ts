import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes-ayuda',
  templateUrl: './mensajes-ayuda.component.html',
  styleUrls: ['./mensajes-ayuda.component.css'],
})
export class MensajesAyudaComponent implements OnInit {
  @Input('mensaje') mensaje: any | null = null;
  @Input('class') class: any | null = null;
  @Input('Label') label: any | null = null;
  activarCheck: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  activarCheckBoolen() {
    this.activarCheck = true;
    setTimeout(() => {
      this.activarCheck = false;
    }, 7000);
  }
}
