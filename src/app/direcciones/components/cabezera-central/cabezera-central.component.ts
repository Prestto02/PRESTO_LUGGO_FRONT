import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Component({
  selector: 'app-cabezera-central',
  templateUrl: './cabezera-central.component.html',
  styleUrls: ['./cabezera-central.component.css'],
})
export class CabezeraCentralComponent implements OnInit {
  @Input('NombreUbicacion') NombreUbicacion: any | null = null;
  @Input('ruta') ruta: any | null = null;
  @Input('cliente') cliente: string = '';
  constructor(private router: Router) {}

  ngOnInit(): void {}
  regresarMenu(ruta: any) {
    this.router.navigateByUrl(ruta);
  }
}
