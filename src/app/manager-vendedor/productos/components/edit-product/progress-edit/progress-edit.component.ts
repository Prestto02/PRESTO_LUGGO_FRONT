import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { ProgressStriper } from './model/Progress.interface';

@Component({
  selector: 'app-progress-edit',
  templateUrl: './progress-edit.component.html',
  styleUrls: ['./progress-edit.component.css'],
})
export class ProgressEditComponent implements OnInit {
  @Input('progressArray') progressArray: ProgressStriper[] = [];
  @Input('widthBarra') widthBarra: number = 0;
  @Input('numberItems') numberImtes: number = 0;
  selectedIndex: number = 0;

  constructor(private router: Router) {}

  ngOnInit(): void {
    this.checkStripper(this.selectedIndex);
  }
  //STRIPPER CHECK NUMEROS
  checkStripper(i: number) {
    this.selectedIndex = i;
    this.progressArray.map((res: ProgressStriper, index: number) => {
      index === i ? (res.disabled = false) : (res.disabled = true);
    });
  }
  //NEXT OR RETURN POSITION USER OF ARRAY
  onNextOrReturn(next: boolean): void {
    next
      ? (this.selectedIndex++, this.checkStripper(this.selectedIndex))
      : (this.selectedIndex--, this.checkStripper(this.selectedIndex));
    this.checkLengthArray();
  }
  //CHECK LENGTH ARRAY BUTTON
  checkLengthArray() {
    if (this.selectedIndex < 0) {
      this.router.navigateByUrl(
        `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.listadoProductos}`
      );
    }
  }
  //GUARDAR FORMULARIO
  submitFormulario() {
    this.router.navigateByUrl(
      `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.listadoProductos}`
    );
  }
}
