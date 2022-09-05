import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { BaseFormPolitics } from '../models/BaseFormPolitics.models';
import { BaseFormSearchPolitics } from '../models/BaseFormSearchPolitics.models';
import {
  IPolitics,
  IPoliticsData,
  PoliticsHeaderTable,
} from '../models/IPolitics.models';
import { PoliticsEditService } from '../service/politics-edit.service';
@Component({
  selector: 'app-list-politics',
  templateUrl: './list-politics.component.html',
  styleUrls: ['./list-politics.component.css'],
})
export class ListPoliticsComponent implements OnChanges {
  politicsHeaders = PoliticsHeaderTable;
  repository: string = RepositorioImg.urlRepositorio+'img/IMÁGENES/politicas/';
  @Input('dataPolitics') dataPolitics: Array<IPoliticsData> = [];
  p: number = 1;
  dialogVisibleDelete: boolean = false;
  id: any;
  constructor(
    private route: Router,
    private formB: BaseFormPolitics,
    private apiServi: PoliticsEditService,
    public formSearch: BaseFormSearchPolitics
  ) {}
  //SI VIENE ALGO NUEVO EN EL ON CHANGES LO ACTUALIZO
  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.dataPolitics.currentValue != changes.dataPolitics.previousValue
    ) {
      this.dataPolitics = changes.dataPolitics.currentValue;
    }
  }
  //IR A VISUALIZAR LOS DOCUMENTOS CON EL ID
  irAVisualizar(id?: any): void {
    this.route.navigateByUrl(
      `${UrlFront.PoliticasEdicion.ModulePolitics}/${UrlFront.PoliticasEdicion.visualizarPoliticsGet}/${id}`
    );
  }

  //EDITAR POLTICAS
  editarPolitics(id: any): void {
    this.apiServi.getPoliticsId(id).subscribe((res: any) => {
      this.formB.formPolitics.patchValue({
        id: res.id,
        documentName: res.documentName,
        documentVS: res.documentVS,
        documentLink: res.routefile,
        permises: res.permises,
        docHeredate: res.docHeredate,
      });
      this.apiServi.setEditName(res.docHeredate); //SETEO EL DOC HEREDATE PARA LA OBSERVABLE
    });
  }
  //SETEO EL ID Y ABRO EL MODAL PARA ELIMINAR LA POLITICA O CARPETA
  eliminarPolitics(id: any): void {
    this.dialogVisibleDelete = true;
    this.id = id;
  }
  //LIMPIO EL FORMULARIO
  limpiarFormulario(): void {
    this.apiServi.setEditName('');
    this.formB.limpiarFormulario();
  }
  //ELIMINO LA POLITICA POR COMPLETO
  eliminarPoliticsDialog(): void {
    this.apiServi.deteletPolitics(this.id).subscribe((res: any) => {
      this.apiServi.getAllPolitics().subscribe((res: Array<IPoliticsData>) => {
        this.dataPolitics = res;
        this.dialogVisibleDelete = false;
      });
    });
  }
  //CIERRO EL MODAL
  cerrarModalDelete(): void {
    this.dialogVisibleDelete = false;
  }
}
