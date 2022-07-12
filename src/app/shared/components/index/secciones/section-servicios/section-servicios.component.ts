import { Component, OnInit } from '@angular/core';
import { arrayServicios } from './arrayServicios';

@Component({
  selector: 'app-section-servicios',
  templateUrl: './section-servicios.component.html',
  styleUrls: ['./section-servicios.component.css'],
})
export class SectionServiciosComponent implements OnInit {
  arrayServicios = arrayServicios;
  constructor() {}

  ngOnInit(): void {}
}
