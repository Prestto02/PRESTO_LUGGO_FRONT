import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { BaseFormCliente } from './models/BaseFormPerfilCliente';
import { PerfilPersonaSecciones } from './models/PersonaPerfil';

@Component({
  selector: 'app-perfil-cliente',
  templateUrl: './perfil-cliente.component.html',
  styleUrls: ['./perfil-cliente.component.css'],
})
export class PerfilClienteComponent implements OnInit {
  perfilPersona: any = PerfilPersonaSecciones;
  constructor(public formB: BaseFormCliente, private router: Router) {}

  ngOnInit(): void {}

  ocultarSecciones(id: any) {
    this.perfilPersona.map((res: any) => {
      if (res.id === id) {
        res.disabled = false;
      } else {
        res.disabled = true;
      }
    });
  }

  guardarInformacion() {
    console.log(this.formB.formCliente.value);
  }
  regresar() {
    this.router.navigateByUrl(
      `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}`
    );
  }
}
