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
    /* this.urlId = this.actived.snapshot.paramMap.get('id'); */
  }

  ngOnInit(): void {
    this.actived.params.subscribe((res: any) => {
      this.urlId = res.id;
      this.getDataDocuments(this.urlId);
    });
  }

  getDataDocuments(id: any): void {
    if (id === 'todos') {
      //TRAER TODOS LOS DOCUMENTOS Y CARPETAS
      this.api.getFoldersPolitics().subscribe((res: IPoliticsArray) => {
        this.arrayDocuments = res;
      });
    } else {
      //SI ES OTRO QUE NO SEA TODOS CONSULTO POR ID LOS CARPETAS
      this.api.getFoldersIdPolitics(id).subscribe((res: IPoliticsArray) => {
        if (res.arrayFoldersPolitics.length === 0) {
          this.arrayDocuments.documentUrl = res.documentUrl;
          this.arrayDocuments.documentName = res.documentName;
          this.searchDocuments(id);
        }
        if (res.arrayFoldersPolitics.length > 0) {
          this.arrayDocuments = res;
        }
      });
    }
  }
  //BUSCO LOS DOCUMENTOS Y CAMBIO EL ESTADO
  searchDocuments(id: any): void {
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
