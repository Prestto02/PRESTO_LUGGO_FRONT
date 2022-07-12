import { Component, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';

@Component({
  selector: 'app-seccion-quinta',
  templateUrl: './seccion-quinta.component.html',
  styleUrls: ['./seccion-quinta.component.css']
})
export class SeccionQuintaComponent implements OnInit {
  img1 = `${RepositorioImg.urlRepositorio}img/IMÁGENES/quienes-somos/Rectangle-2.png`;

  constructor() { }

  ngOnInit(): void {
  }

}
