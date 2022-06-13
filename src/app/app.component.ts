import { Component } from '@angular/core';
import { NavigationEnd, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  //title = 'frontend';
  constructor(private router: Router) {
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
}
