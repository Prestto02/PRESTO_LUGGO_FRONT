import { Component, OnInit } from '@angular/core';
import { arrayServicios, ServiciosImg } from './arrayServicios';

@Component({
  selector: 'app-section-servicios',
  templateUrl: './section-servicios.component.html',
  styleUrls: ['./section-servicios.component.css'],
})
export class SectionServiciosComponent implements OnInit {
  arrayServicios: ServiciosImg[] = arrayServicios;
  constructor() {}

  ngOnInit(): void {}
}
