import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Component({
  selector: 'app-seccion-adn',
  templateUrl: './seccion-adn.component.html',
  styleUrls: ['./seccion-adn.component.css'],
})
export class SeccionAdnComponent implements OnInit {
  @Input('NombreUbicacion') NombreUbicacion: any | null = null;
  @Input('ruta') ruta: any | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {}
  regresarMenu(ruta: any) {
    this.router.navigateByUrl(
      `${UrlFront.Manager.managerVendedor}/${ruta}`
    );
  }
}
