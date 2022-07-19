import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/login/services/token.service';
import { MenuClient } from '../mi-cuenta/models/MenuClients.interface';

@Component({
  selector: 'app-list-items-cuenta',
  templateUrl: './list-items-cuenta.component.html',
  styleUrls: ['./list-items-cuenta.component.css'],
})
export class ListItemsCuentaComponent implements OnInit {
  @Input('arrayList') arratListItems: MenuClient[] = [];
  idCliente: any;
  constructor(private router: Router, private Token: TokenService) {
    this.idCliente = this.Token.getTokenId();
  }

  ngOnInit(): void {}

  irAlLink(link: string) {
    this.router.navigateByUrl(`${link}/${this.idCliente}`);
  }
}
