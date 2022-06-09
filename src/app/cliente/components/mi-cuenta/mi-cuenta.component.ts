import { Component, OnInit } from '@angular/core';

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
      icons:
        'https://ecovitali.presttoapp.net/Puertto/Calidad/Repositorio/img/IMÁGENES/list-content-adn.png',
      subtitle: 'Crea tu catálogo de productos o servicios.',
    },
    {
      id: 2,
      title: 'Mis pagos',
      icons:
        'https://ecovitali.presttoapp.net/Puertto/Calidad/Repositorio/img/IMÁGENES/etiquetasAdn.png',
      subtitle: 'Revisa el estado de tus pedidos online.',
    },
    {
      id: 3,
      title: 'Mi perfil',
      icons:
        'https://ecovitali.presttoapp.net/Puertto/Calidad/Repositorio/img/IMÁGENES/list-content-adn.png',
      subtitle: 'Revisa el estado de tus pedidos online.',
    },
    {
      id: 4,
      title: 'Direcciones',
      icons:
        'https://ecovitali.presttoapp.net/Puertto/Calidad/Repositorio/img/IMÁGENES/etiquetasAdn.png',
      subtitle: 'Crea tu catálogo de productos o servicios.',
    },
    {
      id: 5,
      title: 'Mis Favoritos',
      icons:
        'https://ecovitali.presttoapp.net/Puertto/Calidad/Repositorio/img/IMÁGENES/list-content-adn.png',
      subtitle: 'Revisa tus pagos y transferencias online.',
    },
    {
      id: 6,
      title: 'Seguridad',
      icons:
        'https://ecovitali.presttoapp.net/Puertto/Calidad/Repositorio/img/IMÁGENES/etiquetasAdn.png',
      subtitle: 'Revisa tus pagos y transferencias online.',
    },
  ];
  constructor() {}

  ngOnInit(): void {}
}
