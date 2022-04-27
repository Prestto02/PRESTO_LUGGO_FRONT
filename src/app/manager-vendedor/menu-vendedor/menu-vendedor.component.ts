import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-vendedor',
  templateUrl: './menu-vendedor.component.html',
  styleUrls: ['./menu-vendedor.component.css'],
})
export class MenuVendedorComponent implements OnInit {
  container: boolean = false;
  constructor() {}

  ngOnInit(): void {}
  mouseChange() {
    console.log('entre');
  }
}
