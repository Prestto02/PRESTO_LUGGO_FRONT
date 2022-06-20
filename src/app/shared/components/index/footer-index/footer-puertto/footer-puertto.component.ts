import { Component, OnInit } from '@angular/core';
import { itemFooter } from './listItemFooter';

@Component({
  selector: 'app-footer-puertto',
  templateUrl: './footer-puertto.component.html',
  styleUrls: ['./footer-puertto.component.css'],
})
export class FooterPuerttoComponent implements OnInit {
  arrayItems = itemFooter;
  constructor() {}

  ngOnInit(): void {}
}
