import { Component, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';

@Component({
  selector: 'app-seccion-cuarta',
  templateUrl: './seccion-cuarta.component.html',
  styleUrls: ['./seccion-cuarta.component.css'],
})
export class SeccionCuartaComponent implements OnInit {
  img1 = `${RepositorioImg.urlRepositorio}img/IMÁGENES/quienes-somos/Rectangle-4.png`;

  constructor() {}

  ngOnInit(): void {}
}
