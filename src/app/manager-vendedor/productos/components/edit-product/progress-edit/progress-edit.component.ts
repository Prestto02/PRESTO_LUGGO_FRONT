import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { ProgressStriper } from './model/Progress.interface';
import { DataFormProducts } from '../../../helpers/DataFormProducts';
import { ListadoProductosComponent } from '../../listado-productos/listado-productos.component';

@Component({
  selector: 'app-progress-edit',
  templateUrl: './progress-edit.component.html',
  styleUrls: ['./progress-edit.component.css'],
})
export class ProgressEditComponent implements OnInit, OnDestroy {
  @Input('progressArray') progressArray: ProgressStriper[] = [];
  @Input('widthBarra') widthBarra: number = 0;
  @Input('numberItems') numberImtes: number = 0;
  selectedIndex: number = 0;

  constructor(
    private router: Router,
    private apiDataForm: DataFormProducts,
    private listComponent: ListadoProductosComponent
  ) {}

  ngOnInit(): void {
    this.checkStripper(this.selectedIndex);
  }
  ngOnDestroy(): void {
    this.apiDataForm.limpiarTodoForm();
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
    this.listComponent.guardarProduct(true);
  }
}
