import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-buttons-load',
  templateUrl: './buttons-load.component.html',
  styleUrls: ['./buttons-load.component.css'],
})
export class ButtonsLoadComponent implements OnInit {
  @Input('load') load: boolean | null = null;
  @Input('formB') formB: any ;
  @Input('valueButton') valueButton: string | null = null;
  constructor() {}

  ngOnInit(): void {}
}
