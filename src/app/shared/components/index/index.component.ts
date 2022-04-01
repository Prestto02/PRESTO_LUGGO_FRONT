import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CarritoItemsService } from './menu/services/carrito-items.service';

@Component({
  selector: 'app-index',
  templateUrl: './index.component.html',
  styleUrls: ['./index.component.css'],
})
export class IndexComponent implements OnInit {
  public nombre: any;
  public categoria?: any;
  constructor(private _route: ActivatedRoute) {
    this.nombre = this._route.snapshot.paramMap.get('nombre');
    this.categoria = this._route.snapshot.paramMap.get('categoria');
  }

  ngOnInit(): void {}
}
