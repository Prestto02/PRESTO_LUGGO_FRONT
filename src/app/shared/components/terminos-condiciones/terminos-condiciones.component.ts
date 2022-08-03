import { Component } from '@angular/core';
@Component({
  selector: 'app-terminos-condiciones',
  templateUrl: './terminos-condiciones.component.html',
  styleUrls: ['./terminos-condiciones.component.css'],
})
export class TerminosCondicionesComponent {
  currentSection = 'section1';

  onSectionChange(sectionId: string) {
    this.currentSection = sectionId;
  }

  scrollTo(section: any) {
    var selector = <HTMLElement>document.querySelector('#' + section);
    selector.scrollIntoView();
  }
}
