import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositorioImg } from '../../helpers/RepositorioImg';
import { UrlFront } from '../../routes/RoutesFront';
import { IPoliticsArray } from './models/PoliticsData.models';
import { PoliticsService } from './services/politics.service';
@Component({
  selector: 'app-politicas',
  templateUrl: './politicas.component.html',
  styleUrls: ['./politicas.component.css'],
})
export class PoliticasComponent implements OnInit {
  arrayDocuments: any;
  urlId: any;
  visualizar: string = RepositorioImg.urlRepositorio;
  constructor(
    private api: PoliticsService,
    private router: Router,
    private actived: ActivatedRoute
  ) {
    this.urlId = this.actived.snapshot.paramMap.get('id');
  }

  ngOnInit(): void {
    this.getDataDocuments(this.urlId);
  }

  getDataDocuments(id: any): void {
    if (id === 'todos') {
      this.api.getFoldersPolitics().subscribe((res: IPoliticsArray) => {
        this.arrayDocuments = res;
      });
    } else {
      this.api.getFoldersIdPolitics(id).subscribe((res: IPoliticsArray) => {
        if (res.arrayFoldersPolitics.length === 0) {
          this.arrayDocuments.documentUrl = res.documentUrl;
          this.searchDocuments(id);
        }
        if (res.arrayFoldersPolitics.length > 0) {
          this.arrayDocuments = res;
        }
      });
    }
  }

  searchDocuments(id: any): void {
    console.log(id);
    this.arrayDocuments.arrayFoldersPolitics.map((res: any) => {
      if (res.id === id) {
        res.actived = true;
      } else {
        res.actived = false;
      }
    });
  }

  //BUSCAR DOCUMENTOS
  buscarDocument(id: any): void {
    this.router.navigateByUrl(
      `${UrlFront.Politicas.politicas}/${UrlFront.Politicas.politicasPuertto}/${id}`
    );
    this.getDataDocuments(id);
  }
}
