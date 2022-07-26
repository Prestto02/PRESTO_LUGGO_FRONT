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
  nombreUbicacion: string = '';
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
  agregarDireccion(id: number, nombre: string): void {
    this.formB.formPagar.patchValue({
      id_ubicacion: id,
      nombreUbicacion: nombre,
    });
    this.habilitar = false;
  }

  /* BUSCAR DIRECCIONES PERO HABILITAR EL ARRAY */
  buscadorUbicaciones(e: any): void {
    this.nombreUbicacion = e.target.value;
    if (this.nombreUbicacion.length > 0) {
      this.habilitar = true;
    } else {
      this.habilitar = false;
    }
  }
  /* ABRIR EL MENU CUANDO ESCRIBE */
  abrirMenuKey(): void {
    this.habilitar = true;
  }
  /* ABRIR EL MENU A TRAVES DEL DESPEGABLE */
  abrirMenu(): void {
    this.habilitar = !this.habilitar;
  }
  /* CERRAR LISTA */
  cerrarLista(): void {
    this.habilitar = false;
  }
}
