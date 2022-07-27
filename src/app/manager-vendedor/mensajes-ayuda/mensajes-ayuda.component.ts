import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-mensajes-ayuda',
  templateUrl: './mensajes-ayuda.component.html',
  styleUrls: ['./mensajes-ayuda.component.css'],
})
export class MensajesAyudaComponent implements OnInit {
  @Input('mensaje') mensaje: string | null = null;
  @Input('class') class: string | null = null;
  @Input('Label') label: string | null = null;
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
