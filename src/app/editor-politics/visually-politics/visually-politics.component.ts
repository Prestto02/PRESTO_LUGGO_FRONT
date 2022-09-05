import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
import { UrlFront } from 'src/app/shared/routes/RoutesFront';
import { IPoliticsData } from '../models/IPolitics.models';
import { PoliticsEditService } from '../service/politics-edit.service';
@Component({
  selector: 'app-visually-politics',
  templateUrl: './visually-politics.component.html',
  styleUrls: ['./visually-politics.component.css'],
})
export class VisuallyPoliticsComponent implements OnInit {
  id: string = '';
  pdfSrc: string = '';
  nameDocument: string = '';
  urlRepository: string = RepositorioImg.urlRepositorio;
  constructor(
    private actived: ActivatedRoute,
    private route: Router,
    private apiServi: PoliticsEditService
  ) {
    this.id = this.actived.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getDocumentVisually();
  }

  getDocumentVisually(): void {
    this.apiServi.getPoliticsId(this.id).subscribe((res: IPoliticsData) => {
      this.nameDocument = res.documentName;
      this.pdfSrc = res.routefile;
    });
  }

  regresar(): void {
    this.route.navigateByUrl(`${UrlFront.PoliticasEdicion.ModulePolitics}/${UrlFront.Politicas.politicas}`)
  }
}
