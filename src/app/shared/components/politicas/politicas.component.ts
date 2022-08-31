import { Component, OnInit } from '@angular/core';
import { IPolitics } from 'src/app/editor-politics/models/IPolitics.models';
import { PoliticsEditService } from '../../../editor-politics/service/politics-edit.service';
@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.css'],
}) //POLITICS MODELS
export class PoliticasComponent implements OnInit {
  arrayDocuments: ReadonlyArray<IPolitics> = [];
  pdfURL: string = '';
  constructor(private api: PoliticsEditService) {}

  ngOnInit(): void {
    this.getDataDocuments();
  }

  getDataDocuments(): void {
    this.api.getAllPolitics().subscribe((res: ReadonlyArray<IPolitics>) => {
      this.arrayDocuments = res;
    });
  }

  buscarDocument(): void {
    console.log('hello');
  }
}
