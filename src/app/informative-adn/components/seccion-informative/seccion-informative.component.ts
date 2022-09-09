import { Component, OnInit } from '@angular/core';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';

@Component({
  selector: 'app-seccion-informative',
  templateUrl: './seccion-informative.component.html',
  styleUrls: ['./seccion-informative.component.css'],
})
export class SeccionInformativeComponent implements OnInit {
  urlImg: string = RepositorioImg.urlRepositorio+'img/IMÁGENES/img-informative-adn/informative adn.png';
  constructor() {}

  ngOnInit(): void {}
}
