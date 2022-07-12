import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from '../../routes/RoutesFront';

@Component({
  selector: 'app-logo-luggo',
  templateUrl: './logo-luggo.component.html',
  styleUrls: ['./logo-luggo.component.css'],
})
export class LogoLuggoComponent implements OnInit {
  constructor(private router: Router) {}

  ngOnInit(): void {}
  irIndex() {
    this.router.navigateByUrl(`${UrlFront.Menu.menu}/${UrlFront.Menu.index}`);
  }
}
