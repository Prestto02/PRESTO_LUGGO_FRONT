import { Component, OnInit, Inject } from '@angular/core';
import { DOCUMENT } from '@angular/common';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css'],
})
export class FooterComponent implements OnInit {
  constructor(
    @Inject(DOCUMENT) private document: Document, //DOCUMENT
    private _route: Router
  ) {}

  ngOnInit(): void {}
  irQuienesSomos() {
    this._route.navigateByUrl(
      `${UrlFront.Menu.menu}/${UrlFront.Menu.quienesSomos}`
    );
  }

  //DETECTAR EL SCROLL DEL HTML
  onScrollTop(): void {
    this.document.documentElement.scrollTop = 0;
  }
}
