import { Component, OnInit } from '@angular/core';
import { BancoService } from './services/banco.service';

@Component({
  selector: 'app-registrar-adn',
  templateUrl: './registrar-adn.component.html',
  styleUrls: ['./registrar-adn.component.css'],
})
export class RegistrarAdnComponent implements OnInit {
  arrayBanco: any = [];

  constructor(private apiBanco: BancoService) {}

  ngOnInit(): void {
    this.getAllBancos();
  }
  //TRAER TODOS LOS BANCOS
  getAllBancos() {
    this.apiBanco.getAllBancos().subscribe((res) => {
      this.arrayBanco = res;
    });
  }
}
