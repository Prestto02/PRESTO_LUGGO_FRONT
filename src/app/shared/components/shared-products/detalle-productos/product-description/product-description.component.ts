import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-description',
  templateUrl: './product-description.component.html',
  styleUrls: ['./product-description.component.css'],
})
export class ProductDescriptionComponent implements OnInit {
  @Input('productoObjeto') productoObjeto: any | null = null;
  constructor() {}

  ngOnInit(): void {}
}
