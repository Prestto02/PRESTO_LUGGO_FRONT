import { Component, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Component({
  selector: 'app-mi-cuenta',
  templateUrl: './mi-cuenta.component.html',
  styleUrls: ['./mi-cuenta.component.css'],
})
export class MiCuentaComponent implements OnInit {
  arrayList: any = [
    {
      id: 1,
      title: 'Mis Pedidos',
      icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/list-content-adn.png`,
      subtitle: 'Crea tu catálogo de productos o servicios.',
      link: `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}`,
    },
    {
      id: 2,
      title: 'Mis pagos',
      icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/billeteraAdn.png`,
      subtitle: 'Revisa el estado de tus pedidos online.',
      link: `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}`,
    },
    {
      id: 3,
      title: 'Mi perfil',
      icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/Portal-Usuario-Comprador/mi-perfil.png`,
      subtitle: 'Revisa el estado de tus pedidos online.',
      link: `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.perfilCliente}`,
    },
    {
      id: 4,
      title: 'Direcciones',
      icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/Portal-Usuario-Comprador/mis-direcciones.png`,
      subtitle: 'Crea tu catálogo de productos o servicios.',
      link: `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}`,
    },
    {
      id: 5,
      title: 'Mis Favoritos',
      icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/Portal-Usuario-Comprador/favoritos.png`,
      subtitle: 'Revisa tus pagos y transferencias online.',
      link: `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}`,
    },
    {
      id: 6,
      title: 'Seguridad',
      icons: `${RepositorioImg.urlRepositorio}img/IMÁGENES/Portal-Usuario-Comprador/seguridad.png`,
      subtitle: 'Revisa tus pagos y transferencias online.',
      link: `${UrlFront.Cliente.cliente}/${UrlFront.Cliente.miCuenta}`,
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
