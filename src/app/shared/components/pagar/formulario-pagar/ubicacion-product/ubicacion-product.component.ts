import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DireccionUsersService } from 'src/app/direcciones/components/services/direccion-users.service';
import { TokenService } from 'src/app/login/services/token.service';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { BaseFormPagar } from '../models/BaseFormPagar';
import { Direcciones } from '../../../../../direcciones/models/Direcciones.models';

@Component({
  selector: 'app-ubicacion-product',
  templateUrl: './ubicacion-product.component.html',
  styleUrls: ['./ubicacion-product.component.css'],
})
export class UbicacionProductComponent implements OnInit {
  @Input('formGroup') formGroup: any | null = null;
  arrayDirecciones: Direcciones[] = [];
  idClient: any;
  habilitar: boolean = false;
  constructor(
    private router: Router,
    private token: TokenService,
    public formB: BaseFormPagar,
    private apiDireccion: DireccionUsersService
  ) {
    this.idClient = this.token.getTokenId();
  }

  ngOnInit(): void {
    this.consultarDireccionesUser();
  }
  /* ENVIAR AL MODULO DE DIRECCIONES */
  consultarDireccionesUser(): void {
    this.apiDireccion.getAllDireccionUser().subscribe((res: Direcciones[]) => {
      this.arrayDirecciones = res;
    });
  }
  /* DIRECCIONES */
  irADireccion(): void {
    this.router.navigateByUrl(
      `${UrlFront.Direcciones.moduloDireccion}/${UrlFront.Direcciones.direcciones}/${this.idClient}`
    );
  }
  /* AGREGAR O SETEAR LAS UBICACIONES EN EL FORMULARIO */
  agregarDireccion(direccion: Direcciones): void {
    this.formB.formPagar.patchValue({
      id_ubicacion: direccion.id_direccion,
      nombreUbicacion: `${direccion.descripcion}`,
    });
    this.habilitar = false;
  }

  /* ABRIR EL MENU CUANDO ESCRIBE */
  abrirMenuKey(): void {
    this.habilitar = true;
  }
  /* ABRIR EL MENU A TRAVES DEL DESPEGABLE */
  abrirMenu(): void {
    this.habilitar = !this.habilitar;
  }
}
