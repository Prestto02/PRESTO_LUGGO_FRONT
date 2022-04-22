import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Component({
  selector: 'app-footer2',
  templateUrl: './footer2.component.html',
  styleUrls: ['./footer2.component.css'],
})
export class Footer2Component implements OnInit {
  constructor(private _route: Router) {}

  ngOnInit(): void {}
  irQuienesSomos() {
    this._route.navigateByUrl(
      `${UrlFront.Menu.menu}/${UrlFront.Menu.quienesSomos}`
    );
  }
}
