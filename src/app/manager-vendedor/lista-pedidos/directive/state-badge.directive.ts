import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appStateBadge]',
})
export class StateBadgeDirective implements AfterViewInit {
  @Input('estado') estado: string = '';
  constructor(private render2: Renderer2, private elementRef: ElementRef) {}
  elementBadge: ElementRef = this.elementRef.nativeElement;

  ngAfterViewInit(): void {
    this.getStateColorBadge();
  }
  //ASIGNANDO EL COLOR SEGUN EL ESTADO
  getStateColorBadge(): void {
    if (this.estado === 'Terminado') {
      this.render2.addClass(this.elementBadge, 'bg-success');
    }
    if (this.estado === 'En proceso' || this.estado === 'En espera') {
      this.render2.addClass(this.elementBadge, 'bg-warning');
    }
    if (this.estado === 'No procesada' || this.estado === 'Cancelado') {
      this.render2.addClass(this.elementBadge, 'bg-danger');
    }
  }
}
