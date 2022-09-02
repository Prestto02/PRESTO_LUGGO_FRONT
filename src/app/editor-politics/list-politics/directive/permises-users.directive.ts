import {
  Directive,
  ElementRef,
  Input,
  Renderer2,
  AfterViewInit,
} from '@angular/core';

@Directive({
  selector: '[appPermisesUsers]',
})
export class PermisesUsersDirective implements AfterViewInit {
  @Input('permises') permises: any | null = null;
  constructor(private render2: Renderer2, private elementRef: ElementRef) {}
  elementPermises: ElementRef = this.elementRef.nativeElement;

  ngAfterViewInit(): void {
    this.getStatePermises();
  }

  getStatePermises(): void {
    switch (this.permises) {
      case 1:
        this.statePermises('Adn');
        break;
      case 2:
        this.statePermises('Cliente');
        break;
      case 3:
        this.statePermises('Todos');
        break;
      default:
        console.log('no existe permisos');
        break;
    }
  }

  statePermises(valor: string): void {
    this.render2.setProperty(this.elementPermises, 'innerText', valor);
  }
}
