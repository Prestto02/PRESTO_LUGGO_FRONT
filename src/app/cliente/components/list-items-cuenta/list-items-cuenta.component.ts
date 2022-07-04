import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/login/services/token.service';

@Component({
  selector: 'app-list-items-cuenta',
  templateUrl: './list-items-cuenta.component.html',
  styleUrls: ['./list-items-cuenta.component.css'],
})
export class ListItemsCuentaComponent implements OnInit {
  @Input('arrayList') arratListItems: any | null = null;
  idCliente: any;
  constructor(private router: Router, private Token: TokenService) {
    this.idCliente = this.Token.getTokenId();
  }

  ngOnInit(): void {}
  irAlLink(link: any) {
    this.router.navigateByUrl(`${link}`);
  }
}
