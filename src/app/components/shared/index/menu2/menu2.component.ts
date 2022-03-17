import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css'],
})
export class Menu2Component implements OnInit {
  abrirMenu = false;
  constructor() {}

  ngOnInit(): void {}
  openNav() {
    this.abrirMenu = true;
  }
  closeNav() {
    this.abrirMenu = false;
  }
}
