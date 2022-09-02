import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
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
PoliticsHeaderTable;
@Component({
  selector: 'app-list-politics',
  templateUrl: './list-politics.component.html',
  styleUrls: ['./list-politics.component.css'],
})
export class ListPoliticsComponent implements OnInit, OnChanges {
  politicsHeaders = PoliticsHeaderTable;
  @Input('dataPolitics') dataPolitics: Array<IPoliticsData> = [];
  search: string = '';
  p: number = 1;

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

  ngOnInit(): void {}

  irAVisualizar(id?: any): void {
    this.route.navigateByUrl(
      `${UrlFront.PoliticasEdicion.ModulePolitics}/${UrlFront.PoliticasEdicion.visualizarPoliticsGet}/${id}`
    );

  }

  editarPolitics(id: any): void {
    this.apiServi.getPoliticsId(id).subscribe((res: any) => {
      console.log(res);
      this.formB.formPolitics.setValue({ ...res });
    });
  }
}
