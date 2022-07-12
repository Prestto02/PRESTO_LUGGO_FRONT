import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlApi } from 'src/app/shared/routes/RoutesApi';

@Component({
  selector: 'app-redes-sociales',
  templateUrl: './redes-sociales.component.html',
  styleUrls: ['./redes-sociales.component.css'],
})
export class RedesSocialesComponent implements OnInit {
  public urlFacebook = `${UrlApi.ApiUrl}${UrlApi.loginFacebook}`;
  public urlGoogle = `${UrlApi.ApiUrl}${UrlApi.loginGoogle}`;
  public urlMicrosoft = `${UrlApi.ApiUrl}${UrlApi.loginMicrosoft}`;
  @Input('text-rapido') textRapido: any | null = null;
  @Input('CuentaoRegistrar') cuentaORegistrar: any | null = null;
  @Input('IniciarOregistrar') iniciarORegistrar: any | null = null;
  @Input('ruta') ruta: any | null = null;

  constructor(private router: Router) {}

  ngOnInit(): void {}

  irOtroEnlace(ruta: any) {
    this.router.navigateByUrl(ruta);
  }
}
