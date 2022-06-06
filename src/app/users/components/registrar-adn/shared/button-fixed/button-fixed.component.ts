import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-button-fixed',
  templateUrl: './button-fixed.component.html',
  styleUrls: ['./button-fixed.component.css'],
})
export class ButtonFixedComponent implements OnInit {
  @Input('data-target-atras') dataTargetAtras: any | null = null;
  @Input('arial-controls-atras') arialControlsAtras: any | null = null;
  @Input('data-target-adelante') dataTargetAdelante: any | null = null;
  @Input('arial-controls-adelante') arialControlsAdelante: any | null = null;
  constructor() {}

  ngOnInit(): void {}
}
