import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appColorBadge]',
})
export class ColorBadgeDirective implements AfterViewInit {
  @Input() colorBadgeState: string = '';

  constructor(private render2: Renderer2, private elementRef: ElementRef) {}
  elementBadge: ElementRef = this.elementRef.nativeElement;
  ngAfterViewInit(): void {
    this.getStateColorBadge();
  }
  //ASIGNANDO EL COLOR SEGUN EL ESTADO
  getStateColorBadge(): void {
    if (this.colorBadgeState === 'Pagado') {
      this.render2.addClass(this.elementBadge, 'bg-success');
    }
    if (this.colorBadgeState === 'Pendiente') {
      this.render2.addClass(this.elementBadge, 'bg-warning');
    }
    if (this.colorBadgeState === 'Cancelado') {
      this.render2.addClass(this.elementBadge, 'bg-danger');
    }
  }
}
