import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { Router } from '@angular/router';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import {
  IPolitics,
  IPoliticsData,
  PoliticsHeaderTable,
} from '../models/IPolitics.models';
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

  constructor(private route: Router) {}

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
}
