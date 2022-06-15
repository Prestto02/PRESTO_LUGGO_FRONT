import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-detalle-productos',
  templateUrl: './detalle-productos.component.html',
  styleUrls: ['./detalle-productos.component.css'],
})
export class DetalleProductosComponent implements OnInit {
  productoArray: any = [
    {
      title:
        'Vestido Amazon Essentials largo, sin mangas, oscilante, para mujer',
      calificaciones: '4,720 calificaciones',
      preguntas: '15 preguntas respondidas',
      precio: '$443,99',
      lista: [
        '95 % Rayón, 5 % Elastán',
        'Lavar a máquina',
        'Hecho en INdonesia',
        '100% algodon',
      ],
      imagenes: [
        {
          pequena: [
            'https://m.media-amazon.com/images/I/41ynYz11egL._AC_US40_.jpg',

            'https://m.media-amazon.com/images/I/31AHB7giEqS._AC_SR38,50_.jpg',

            'https://m.media-amazon.com/images/I/31AtmuwFqzS._AC_SR38,50_.jpg',
          ],
          mediana: [
            'https://m.media-amazon.com/images/I/71Wuv0p6UfL._AC_SX679_.jpg',

            'https://m.media-amazon.com/images/I/71sPCLiQ2OS._AC_UY550_.jpg',

            'https://m.media-amazon.com/images/I/81gXCXqhvyS._AC_UY550_.jpg',
          ],
          zoom: [
            'https://m.media-amazon.com/images/I/71Wuv0p6UfL._AC_SL1500_.jpg',

            'https://m.media-amazon.com/images/I/71sPCLiQ2OS._AC_UL1500_.jpg',

            'https://m.media-amazon.com/images/I/81gXCXqhvyS._AC_UL1500_.jpg',
          ],
        },
      ],
    },
  ];
  idProduct: any;
  constructor(private _router: ActivatedRoute) {
    this.idProduct = this._router.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getProductById();
  }
  getProductById() {
    console.log(this.idProduct);
  }
}
