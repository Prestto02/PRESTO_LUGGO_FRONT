import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-list-items-cuenta',
  templateUrl: './list-items-cuenta.component.html',
  styleUrls: ['./list-items-cuenta.component.css'],
})
export class ListItemsCuentaComponent implements OnInit {
  @Input('arrayList') arratListItems: any | null = null;
  constructor() {}

  ngOnInit(): void {}
}
