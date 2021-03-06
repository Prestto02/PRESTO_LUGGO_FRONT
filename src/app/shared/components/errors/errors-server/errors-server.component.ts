import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-errors-server',
  templateUrl: './errors-server.component.html',
  styleUrls: ['./errors-server.component.css'],
})
export class ErrorsServerComponent implements OnInit {
  @Input('message') message: string | null = null; //OBTENGO EL MENSAJE
  @Input('errors') errors: boolean | null = null; //OBTENGO EL ERROR
  constructor() {}

  ngOnInit(): void {}
}
