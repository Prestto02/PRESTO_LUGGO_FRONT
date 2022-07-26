import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/login/services/token.service';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { BaseFormPagar } from '../models/BaseFormPagar';
import { ArrayDirecciones, Direcciones } from './models/ArrayDirecciones';

@Component({
  selector: 'app-ubicacion-product',
  templateUrl: './ubicacion-product.component.html',
  styleUrls: ['./ubicacion-product.component.css'],
})
export class UbicacionProductComponent implements OnInit {
  @Input('formGroup') formGroup: any | null = null;
  arrayDirecciones: Direcciones[] = ArrayDirecciones;
  idClient: any;
  habilitar: boolean = false;
  constructor(
    private router: Router,
    private token: TokenService,
    public formB: BaseFormPagar
  ) {
    this.idClient = this.token.getTokenId();
  }

  ngOnInit(): void {}
  /* ENVIAR AL MODULO DE DIRECCIONES */
  irADireccion(): void {
    this.router.navigateByUrl(
      `${UrlFront.Direcciones.moduloDireccion}/${UrlFront.Direcciones.direcciones}/${this.idClient}`
    );
  }
  /* AGREGAR O SETEAR LAS UBICACIONES EN EL FORMULARIO */
  agregarDireccion(direccion: Direcciones): void {
    this.formB.formPagar.patchValue({
      id_ubicacion: direccion.id_direccion,
      nombreUbicacion: `${direccion.nombre}`,
    });
    this.habilitar = false;
  }

  /* ABRIR EL MENU CUANDO ESCRIBE */
  abrirMenuKey(): void {
    this.habilitar = true;
  }
  /* CERRAR MENU CUANDO SE ENCUENTRE FUERA DEL COMPONENTE */
  cerrarMenu(): void {
    console.log('fuera');
    this.habilitar = false;
  }
  /* ABRIR EL MENU A TRAVES DEL DESPEGABLE */
  abrirMenu(): void {
    this.habilitar = !this.habilitar;
  }
}
