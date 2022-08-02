import { DOCUMENT } from '@angular/common';
import { Component, HostListener, Inject } from '@angular/core';
import { ArrayTerminos } from './ArrayTerminosYCondiciones';

@Component({
  selector: 'app-terminos-condiciones',
  templateUrl: './terminos-condiciones.component.html',
  styleUrls: ['./terminos-condiciones.component.css'],
})
export class TerminosCondicionesComponent {
  arrayTerminos = ArrayTerminos;
  currentSection: string = 'section1';
  scrollHeigth: number = 120;
  constructor(
    @Inject(DOCUMENT) private document: Document //DOCUMENT
  ) {}
  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section: any) {
    var dato = <HTMLElement>document.querySelector('#' + section);
    dato.scrollIntoView();
  }
  //HOSTLISTENER SCROLL
  @HostListener('window:scroll')
  onWindowScroll(): void {
    const yOffset = window.pageYOffset; //GUARDO EL SCROLL DEL USUARIO
    const scrollTop = this.document.documentElement.scrollTop; //SCROLLTOP DEL USUARIO
    const data = (yOffset || scrollTop) > this.scrollHeigth; //SI ES MAYOR A 700PX HAGO EL SCROLL INFINITO
    const fixedTop = <HTMLElement>this.document.querySelector('.columnas-items');
    const seccion= <HTMLElement>this.document.querySelector('#parentDiv');
/*     if (!data) { // SI ES NEGATIVO LE AGREGO EL FIXED
      seccion.style.position='fixed';
      fixedTop.style.position = 'fixed';
    }else{
      seccion.style.position='relative';
      fixedTop.style.position = 'relative';
    } */
  }
}
