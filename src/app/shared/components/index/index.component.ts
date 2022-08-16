import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  public nombre: any;
  public categoria?: any;
  /*  width: number = 0; */
  constructor(private _route: ActivatedRoute) {
    this.nombre = this._route.snapshot.paramMap.get('nombre');
    this.categoria = this._route.snapshot.paramMap.get('categoria');
  }

  ngOnInit(): void {}
  /* DETECTAR EL TAMAÑO DE LA PANTALLA PARA PODER LLAMAR A LA VERSION TELEFONO */
  /*   @HostListener('window:resize', ['$event'])
  resizeTamano(e: any) {
    this.width = e.target.innerWidth;
  } */
}
