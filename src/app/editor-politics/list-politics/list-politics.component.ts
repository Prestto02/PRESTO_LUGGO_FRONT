import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
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

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.dataPolitics.currentValue != changes.dataPolitics.previousValue
    ) {
      this.dataPolitics = changes.dataPolitics.currentValue;
    }
  }

  irAVisualizar(id?: any): void {
    this.route.navigateByUrl(
      `${UrlFront.PoliticasEdicion.ModulePolitics}/${UrlFront.PoliticasEdicion.visualizarPoliticsGet}/${id}`
    );
  }

  editarPolitics(id: any): void {
    this.apiServi.getPoliticsId(id).subscribe((res: any) => {
      this.formB.formPolitics.patchValue({
        id: res.id,
        documentName: res.documentName,
        documentVS: res.documentVS,
        documentLink: res.routefile,
        permises: res.permises,
      });
    });
  }

  eliminarPolitics(id: any): void {
    this.dialogVisibleDelete = true;
    this.id = id;
  }

  eliminarPoliticsDialog(): void {
    this.apiServi.deteletPolitics(this.id).subscribe((res: any) => {
      this.apiServi.getAllPolitics().subscribe((res: Array<IPoliticsData>) => {
        this.dataPolitics = res;
        this.dialogVisibleDelete = false;
      });
    });
  }

  cerrarModalDelete(): void {
    this.dialogVisibleDelete = false;
  }
}
