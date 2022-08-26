import {
  Component,
  OnInit,
  Input,
  OnChanges,
  SimpleChanges,
} from '@angular/core';
import { IPolitics, PoliticsHeaderTable } from '../models/IPolitics.models';
PoliticsHeaderTable;
@Component({
  selector: 'app-list-politics',
  templateUrl: './list-politics.component.html',
  styleUrls: ['./list-politics.component.css'],
})
export class ListPoliticsComponent implements OnInit, OnChanges {
  politicsHeaders = PoliticsHeaderTable;
  @Input('dataPolitics') dataPolitics: Array<IPolitics> = [];
  search: string = '';
  p: number = 1;

  constructor() {}

  ngOnChanges(changes: SimpleChanges): void {
    if (
      changes.dataPolitics.currentValue != changes.dataPolitics.previousValue
    ) {
      this.dataPolitics = changes.dataPolitics.currentValue;
    }
  }

  ngOnInit(): void {}
}
