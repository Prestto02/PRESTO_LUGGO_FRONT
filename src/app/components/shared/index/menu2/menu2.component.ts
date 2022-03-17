import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu2',
  templateUrl: './menu2.component.html',
  styleUrls: ['./menu2.component.css'],
})
export class Menu2Component implements OnInit {
  openSidebar = false;
  constructor() {}

  ngOnInit(): void {}
  openNav() {
    this.openSidebar = true;
  }
  closeNav() {
    this.openSidebar = false;
  }
  getColorSidebar() {
    return this.openSidebar ? 'rgba(43, 44, 68, 0.94)' : 'white';
  }
  getOpenSidebar() {
    return this.openSidebar;
  }
}
