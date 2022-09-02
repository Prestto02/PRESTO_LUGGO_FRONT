import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RepositorioImg } from 'src/app/shared/helpers/RepositorioImg';
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
  urlRepository: string = RepositorioImg.urlRepositorio;
  constructor(
    private actived: ActivatedRoute,
    private apiServi: PoliticsEditService
  ) {
    this.id = this.actived.snapshot.params['id'];
  }

  ngOnInit(): void {
    this.getDocumentVisually();
  }

  getDocumentVisually(): void {
    this.apiServi.getPoliticsId(this.id).subscribe((res: IPoliticsData) => {
      this.pdfSrc = res.routefile;
      console.log(this.urlRepository + this.pdfSrc);
    });
  }
}
