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

  ngOnInit(): void {}

  //STRIPPER CHECK NUMEROS
  checkStripper(i: number) {
    this.selectedIndex = i;
    this.progressArray.map((res: ProgressStriper, index: number) => {
      index === i ? (res.disabled = false) : (res.disabled = true);
    });
  }
  nextCheck() {
    this.progressArray[0].disabled = true;
    this.progressArray[1].disabled = false;
    this.selectedIndex = 1;
  }

  returnCheck() {
    this.progressArray[0].disabled = false;
    this.progressArray[1].disabled = true;
    this.selectedIndex = 0;
    if (!this.progressArray[0].disabled) {
      this.router.navigateByUrl(
        `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.listadoProductos}`
      );
    }
  }

  submitFormulario() {
    this.router.navigateByUrl(
      `${UrlFront.Manager.managerVendedor}/${UrlFront.Manager.vendedor}/${UrlFront.Manager.listadoProductos}`
    );
  }
}
