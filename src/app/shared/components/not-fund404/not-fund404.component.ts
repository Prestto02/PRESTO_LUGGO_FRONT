import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from '../../routes/RoutesFront';

@Component({
  selector: 'app-not-fund404',
  templateUrl: './not-fund404.component.html',
  styleUrls: ['./not-fund404.component.css'],
})
export class NotFund404Component implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  //REGRESAR AL INDEX
  regresar() {
    this.router.navigateByUrl(`${UrlFront.Menu.menu}/${UrlFront.Menu.index}`);
  }
}
