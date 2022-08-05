import { Component } from '@angular/core';
import { RepositorioImg } from '../../helpers/RepositorioImg';
@Component({
  selector: 'app-terminos-condiciones',
  templateUrl: './terminos-condiciones.component.html',
  styleUrls: ['./terminos-condiciones.component.css'],
})
export class TerminosCondicionesComponent {
  urlBanners = `${RepositorioImg.urlRepositorio}img/IMÁGENES/terminos-condiciones/banners-terminos-condiciones.png`;
  /*   currentSection = 'section1';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section: any) {
    var selector = <HTMLElement>document.querySelector('#' + section);
    selector.scrollIntoView();
  } */
}
