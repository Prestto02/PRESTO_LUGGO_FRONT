import {
  AfterViewInit,
  Directive,
  ElementRef,
  Input,
  Renderer2,
  ViewChildren,
} from '@angular/core';

@Directive({
  selector: '[appIdentifyUsers]',
})
export class IdentifyUsersDirective implements AfterViewInit {
  @Input('identyUser') identyUser: string | null = null;
  constructor(private el: ElementRef, private rendered2: Renderer2) {}

  ngAfterViewInit(): void {
    this.userIdentifyCheck();
  }

  userIdentifyCheck(): void {
    this.rendered2.parentNode(this.el.nativeElement);
    /* console.log(this.el.nativeElement); */
  }
}
