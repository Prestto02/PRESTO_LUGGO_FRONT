import { Component, OnInit } from '@angular/core';
import { ServicesColorService } from './services/services-color.service';

@Component({
  selector: 'app-configuracion-color',
  templateUrl: './configuracion-color.component.html',
  styleUrls: ['./configuracion-color.component.css'],
})
export class ConfiguracionColorComponent implements OnInit {
  arrayColores: any = [];
  constructor(private apiServiColor: ServicesColorService) {}

  ngOnInit(): void {
    this.getAllColors();
  }
  //TRAER TODOS LOS COLORES
  getAllColors() {
    this.apiServiColor.getAllColors().subscribe((res) => {
      this.arrayColores = res;
    });
  }
}
