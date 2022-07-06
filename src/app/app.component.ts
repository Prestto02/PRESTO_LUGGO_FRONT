import { Component, HostListener } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';
import { CarritoItemsService } from './shared/components/index/menu-index/menu/services/carrito-items.service';
import { ListaDeseosService } from './shared/components/shared-products/lista-deseos/services/lista-deseos.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //title = 'frontend';
  constructor(
    private router: Router,
    private apiCarrito: CarritoItemsService,
    private apiListDesire: ListaDeseosService
  ) {
    this.router.events.subscribe((event) => {
      if (event instanceof NavigationEnd) {
        this.verifyMenuIndex(event);
      }
    });
  }

  verifyMenuIndex(event: NavigationEnd) {
    const element: any = <HTMLElement>(
      document.getElementById('color-container')
    );
    if (event.url.match('/Menu/index')) {
      element.style.background = '#f1f3f6';
    } else {
      element.style.background = '#fff';
    }
  }
  @HostListener('window:unload', ['$event'])
  unloadHandler(event: any) {
    this.apiCarrito.saveCarsLocalStorage();
    this.apiListDesire.saveListLocalStorage();
  }
  @HostListener('window:load', ['$event'])
  onloadPage(event: any) {
    this.apiCarrito.verifyCarsLocalStorage();
    this.apiListDesire.verifyListLocalStorage();
  }
}
