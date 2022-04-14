import { Component, OnInit } from '@angular/core';
import { CompararProductosService } from './services/comparar-productos.service';

@Component({
  selector: 'app-comparar-productos',
  templateUrl: './comparar-productos.component.html',
  styleUrls: ['./comparar-productos.component.css'],
})
export class CompararProductosComponent implements OnInit {
  productLisComparar: any;
  constructor(private serviComparar: CompararProductosService) {}

  ngOnInit(): void {
    this.getDataCompararProduct();
  }

  getDataCompararProduct() {
    this.serviComparar.listProductC.subscribe((res) => {
      console.log(res);
    });
  }
}
