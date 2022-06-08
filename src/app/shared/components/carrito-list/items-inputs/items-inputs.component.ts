import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-items-inputs',
  templateUrl: './items-inputs.component.html',
  styleUrls: ['./items-inputs.component.css'],
})
export class ItemsInputsComponent implements OnInit {
  @Input('item') item: any | null = null;
  @Input('id') id: any | null = null;
  @Input('itemProducts') itemProducts: any | null = null;
  constructor() {}

  ngOnInit(): void {}


}
