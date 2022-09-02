import { Component, OnInit } from '@angular/core';
import { IPolitics } from 'src/app/editor-politics/models/IPolitics.models';
import { PoliticsEditService } from '../../../editor-politics/service/politics-edit.service';
@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.css'],
})
export class PoliticasComponent implements OnInit {
  arrayDocuments: ReadonlyArray<IPolitics> = [];
  arraYFolderAndDocuments: any = {
    arrayFolders: [
      {
        id: '1',
        name: 'carpeta1',
      },
      {
        id: '2',
        name: 'carpeta2',
      },
      {
        id: '3',
        name: 'carpeta3',
      },
    ],
    documentUrl: 'asdasdas/asdjas/asdas.pdf',
  };
  pdfURL: string = '';
  constructor(private api: PoliticsEditService) {}

  ngOnInit(): void {
    this.getDataDocuments();
  }

  getDataDocuments(): void {
    /*     this.api.getAllPolitics().subscribe((res: ReadonlyArray<IPolitics>) => {
      this.arrayDocuments = res;
    }); */
  }

  buscarDocument(id: any): void {
    this.arraYFolderAndDocuments={
      arrayFolders: [
        {
          id: '1',
          name: 'carpeta4',
        },
        {
          id: '2',
          name: 'carpeta5',
        },
        {
          id: '3',
          name: 'carpeta6',
        },
      ],
      documentUrl: 'asdasdas/asdjas/pqwieyqwe.pdf',
    }
    console.log('hello', id);
  }
}
