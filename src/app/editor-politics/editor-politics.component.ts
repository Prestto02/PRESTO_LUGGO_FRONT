import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PositionUser } from '../shared/class/PositionUser';
import { UrlFront } from '../shared/routes/RoutesFront';
import { ValidarYTransformarImagen } from '../shared/validations/ValidarYTransformarImagen';
import { BaseFormPolitics } from './models/BaseFormPolitics.models';
import { IPolitics, IPoliticsData } from './models/IPolitics.models';
import { PoliticsEditService } from './service/politics-edit.service';

@Component({
  selector: 'app-editor-politics',
  templateUrl: './editor-politics.component.html',
  styleUrls: ['./editor-politics.component.css'],
})
export class EditorPoliticsComponent implements OnInit {
  arrayPolitics: Array<IPoliticsData> = [];
  selectedCountry: any;
  folders: any = [];
  base64PDF: any;
  constructor(
    private apiServi: PoliticsEditService,
    private route: Router,
    public formB: BaseFormPolitics,
    private position: PositionUser,
    private archivePDF: ValidarYTransformarImagen
  ) {}

  ngOnInit(): void {
    this.getAllFolders();
     this.getAllPolitics();
  }

  getAllFolders(): void {
    this.apiServi.getFoldersAll().subscribe((res: any) => {
      this.folders = res;
    });
  }

  setPositionUser(): void {
    this.formB.formPolitics.patchValue({
      latitud: this.position.latitud,
      longitud: this.position.longitud,
    });
  }

  cargarNuevoDocument(): void {
    if (!this.selectedCountry) {
      this.formB.formPolitics.patchValue({
        DocHeredate: '',
      });
    } else {
      this.formB.formPolitics.patchValue({
        DocHeredate: this.selectedCountry.code,
      });
    }
  }

  getArchiveImagen(e: any): void {
    const { imgProducts, imagenTransformada } =
      this.archivePDF.getArchivePDF(e);
    console.log(imagenTransformada);
    if (imagenTransformada.length > 0) {
      this.formB.formPolitics.patchValue({
        DocumentLink: imagenTransformada,
      });
    } else {
      this.formB.formPolitics.patchValue({
        DocumentLink: '',
      });
    }
  }

  getAllPolitics(): void {
    this.apiServi.getAllPolitics().subscribe((res: Array<IPoliticsData>) => {
      this.arrayPolitics = res;
    });
  }

  postDataForm(): void {
    const form: any = this.formB.formPolitics.value;
    // this.setPositionUser();
    this.apiServi.postPolitics(form).subscribe((res) => {
      console.log(res);
      //this.getAllPolitics();
    });
    this.formB.limpiarFormulario();
  }

  rutaVisualizar(): void {
    this.route.navigateByUrl(
      `${UrlFront.PoliticasEdicion.ModulePolitics}/${UrlFront.PoliticasEdicion.visualizarPoliticsGet}/1`
    );
  }
}
