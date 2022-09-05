import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router';
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
    this.urlId = this.actived.snapshot.queryParamMap.get('id');
  }

  ngOnInit(): void {
    this.getDataDocuments(this.urlId);
  }

  getDataDocuments(id: any): void {
    if (id) {
      this.api.getFoldersIdPolitics(id).subscribe((res: IPoliticsArray) => {
        if (res.arrayFoldersPolitics.length > 0) {
          this.arrayDocuments = res;
        } else {
          const idData = this.arrayDocuments.arrayFoldersPolitics.findIndex(
            (data: any) => {
              return data.id === id;
            }
          );
          this.arrayDocuments.arrayFoldersPolitics[idData].actived = true;
          this.arrayDocuments.documentUrl = res.documentUrl;
        }
      });
    } else {
      this.api.getFoldersPolitics().subscribe((res: IPoliticsArray) => {
        this.arrayDocuments = res;
      });
    }
  }

  buscarDocument(id: any): void {
    this.router.navigateByUrl(
      `${UrlFront.Politicas.politicas}/${UrlFront.Politicas.politicasPuertto}/${id}`
    );
    this.getDataDocuments(id);
  }
}
