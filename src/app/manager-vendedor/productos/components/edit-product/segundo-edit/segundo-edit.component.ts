import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-segundo-edit',
  templateUrl: './segundo-edit.component.html',
  styleUrls: ['./segundo-edit.component.css'],
})
export class SegundoEditComponent implements OnInit {
  @Input('productEdit') productEdit: any | null = null;
  constructor() {}

  ngOnInit(): void {}
}
