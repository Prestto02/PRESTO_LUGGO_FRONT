import { Component, HostListener, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-index',
  templateUrl: './menu-index.component.html',
  styleUrls: ['./menu-index.component.css'],
})
export class MenuIndexComponent implements OnInit {
  width: number = 0;
  constructor() {}

  ngOnInit(): void {
    this.onResize();
  }

  /* DETECTAR EL TAMAÑO DE LA PANTALLA PARA PODER LLAMAR A LA VERSION TELEFONO */
  @HostListener('window:resize', ['$event'])
  onResize() {
    this.width = window.innerWidth;
  }
}
