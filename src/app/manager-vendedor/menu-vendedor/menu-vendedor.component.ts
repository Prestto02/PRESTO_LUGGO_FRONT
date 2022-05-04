import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Component({
  selector: 'app-menu-vendedor',
  templateUrl: './menu-vendedor.component.html',
  styleUrls: ['./menu-vendedor.component.css'],
})
export class MenuVendedorComponent implements OnInit {
  container: boolean = false;
  constructor(private route: Router) {}

  ngOnInit(): void {}
  mouseChange() {
    console.log('entre');
  }
  irAlIndex() {
    this.route.navigateByUrl(`${UrlFront.Menu.menu}/${UrlFront.Menu.index}`);
  }
}
