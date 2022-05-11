import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(private _route: Router) {}

  ngOnInit(): void {}
  irQuienesSomos() {
    this._route.navigateByUrl(`${UrlFront.Menu.menu}/${UrlFront.Menu.quienesSomos}`);
  }
}
