import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TokenService } from 'src/app/login/services/token.service';
import { CarritoItemsService } from '../menu/services/carrito-items.service';
import { ArraylistTelephone, ListTelephone } from './ArrayListTelephone';

@Component({
  selector: 'app-menu-telephone',
  templateUrl: './menu-telephone.component.html',
  styleUrls: ['./menu-telephone.component.css'],
})
export class MenuTelephoneComponent implements OnInit {
  listItems: ListTelephone[] = ArraylistTelephone;
  emailUsuario: any;
  totalCarrito: any;
  constructor(
    private router: Router,
    private apiForm: CarritoItemsService, //FORMULARIO CATEGORIAS
    private tokenUser: TokenService //TOKEN SERVICES
  ) {
    this.emailUsuario = this.tokenUser.getTokenEmail(); //OBTENGO EL EMAIL DEL USUARIO
  }

  ngOnInit(): void {
    this.verifyEmailUser();
    this.totalItemsCarrito();
  }
  verifyEmailUser() {
    if (this.emailUsuario) {
      this.listItems[1].data_bs_target = '#offcanvasRightUsers';
      this.listItems[1].aria_controls = 'offcanvasRightUsers';
    } else {
      this.listItems[1].data_bs_target = '#offcanvasRightLogin';
      this.listItems[1].aria_controls = 'offcanvasRightLogin';
    }
  }
  irAlLink(link: string) {
    if (link.length > 0) this.router.navigateByUrl(link);
  }
  //TOTAL ITEMS CARRITO
  totalItemsCarrito() {
    this.apiForm.productsLengthtotal.subscribe((res) => {
      this.totalCarrito = res;
    });
  }
}
