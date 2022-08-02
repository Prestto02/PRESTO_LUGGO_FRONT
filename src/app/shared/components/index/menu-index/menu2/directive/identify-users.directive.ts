import {
  AfterViewInit,
  Directive,
  Input,
  OnInit,
  Renderer2,
} from '@angular/core';
import { Router } from '@angular/router';
import { RolUserService } from 'src/app/guards/services/rol-user.service';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Directive({
  selector: '[appIdentifyUsers]',
})
export class IdentifyUsersDirective implements OnInit, AfterViewInit {
  @Input('identyUser') identyUser: string | null = null;
  message: string = '';
  messageLink: string = '';

  constructor(
    private rendered2: Renderer2,
    private router: Router,
    private rolUser: RolUserService
  ) {}

  ngOnInit(): void {
    setTimeout(() => {
      this.userIdentifyCheck();
    }, 1000);
  }

  ngAfterViewInit(): void {
    setTimeout(() => {
      this.irAlLink();
    }, 1000);
  }
  /* USER IDENTIFY CHECK  */
  userIdentifyCheck(): void {
    const element = <HTMLElement>document.getElementById('miPuertto');
    const miCuenta = <HTMLElement>document.getElementById('miCuenta');
    if (this.identyUser) {
      this.message = this.rendered2.createText('Mi puertto');
      this.messageLink = this.rendered2.createText('Mi cuenta');
      this.rendered2.appendChild(element, this.message);
      this.rendered2.appendChild(miCuenta, this.messageLink);
    } else {
      this.message = this.rendered2.createText('¿No tienes cuenta?');
      this.messageLink = this.rendered2.createText('Registrate aquí');
      this.rendered2.appendChild(element, this.message);
      this.rendered2.appendChild(miCuenta, this.messageLink);
    }
  }
  /* USER FACE IDENTIFY ROL*/
  rolIdentifyUser(): void {
    const rol = this.rolUser.desCryptRolUser();
    this.rolUser.verificarTipoRol(rol);
  }
  /* LINK PARA IR A INICIAR SESION */
  irLinkUser(): void {
    this.router.navigateByUrl(
      `${UrlFront.Login.login}/${UrlFront.Login.iniciarSesion}`
    );
  }
  /* IR AL LINK */
  irAlLink(): void {
    const miCuenta = <HTMLElement>document.getElementById('miCuenta');
    if (this.identyUser)
      this.rendered2.listen(miCuenta, 'click', (event) => {
        this.rolIdentifyUser(); //SEGUN EL ROL DE USUARIO IDENTIFYCADO
      });
    else
      this.rendered2.listen(miCuenta, 'click', (event) => {
        this.irLinkUser(); //IR AL LOGIN
      });
  }
}
