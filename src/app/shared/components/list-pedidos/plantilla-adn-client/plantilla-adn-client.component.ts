import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-plantilla-adn-client',
  templateUrl: './plantilla-adn-client.component.html',
  styleUrls: ['./plantilla-adn-client.component.css'],
})
export class PlantillaAdnClientComponent {
  @Input('NombreUbicacion') NombreUbicacion: string | null = null;
  @Input('ruta') ruta: any | null = null;
  @Input('cliente') cliente: string = '';
  constructor(private router: Router) {}

  regresarMenu(ruta: any) {
    this.router.navigateByUrl(ruta);
  }
}
