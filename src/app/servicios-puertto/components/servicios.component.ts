import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ArrayItems } from './ArrayItems';
@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css'],
})
export class ServiciosComponent implements OnInit {
  name: string = '';
  ArrayItems = ArrayItems;
  constructor(private router: Router) {}

  ngOnInit(): void {}

  irRuta(link: string): void {
    if (link !== '') this.router.navigateByUrl(link);
  }
}
