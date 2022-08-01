import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  OnInit,
  Renderer2,
  ViewChild,
  ViewChildren,
} from '@angular/core';

@Directive({
  selector: '[appIdentifyUsers]',
})
export class IdentifyUsersDirective implements OnInit, AfterViewInit {
  @Input('identyUser') identyUser: string | null = null;
  constructor(private el: ElementRef, private rendered2: Renderer2) {}
  ngAfterViewInit(): void {
    throw new Error('Method not implemented.');
  }
  ngOnInit(): void {
    this.userIdentifyCheck();
    throw new Error('Method not implemented.');
  }

  userIdentifyCheck(): void {
    const element = <HTMLElement>document.getElementById('miPuertto');
    const miCuenta = <HTMLElement>document.getElementById('miCuenta');
    const mensaje = this.rendered2.createText('Mi puertto');
    this.rendered2.appendChild(element, mensaje);
  }
}
