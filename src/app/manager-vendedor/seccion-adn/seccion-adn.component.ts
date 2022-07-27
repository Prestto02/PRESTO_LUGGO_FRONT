import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Component({
  selector: 'app-seccion-adn',
  templateUrl: './seccion-adn.component.html',
  styleUrls: ['./seccion-adn.component.css'],
})
export class SeccionAdnComponent {
  @Input('NombreUbicacion') NombreUbicacion: string | null = null;
  @Input('ruta') ruta: string = '';

  constructor(private router: Router) {}

  regresarMenu(ruta: string) {
    this.router.navigateByUrl(`${UrlFront.Manager.managerVendedor}/${ruta}`);
  }
}
