import { Component, OnInit, OnChanges } from '@angular/core';
import { id } from '@swimlane/ngx-charts';
import { PositionUser } from '../shared/class/PositionUser';
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
    this.getAllFolders();
    if (!this.selectedCountry) {
      this.formB.formPolitics.patchValue({
        docHeredate: '',
      });
    } else {
      this.formB.formPolitics.patchValue({
        docHeredate: this.selectedCountry.code,
      });
    }
  }

  getArchiveImagen(e: any): void {
    const { imgProducts, imagenTransformada } =
      this.archivePDF.getArchivePDF(e);
    if (imagenTransformada.length > 0) {
      this.formB.formPolitics.patchValue({
        documentLink: imagenTransformada,
      });
    } else {
      this.formB.formPolitics.patchValue({
        documentLink: '',
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
    if (form.id) {
      this.apiServi.putPolitics(form).subscribe((res) => {
        this.getAllPolitics();
        this.formB.limpiarFormulario();
      });
    } else {
      this.apiServi.postPolitics(form).subscribe((res) => {
        this.getAllPolitics();
        this.formB.limpiarFormulario();
      });
    }
  }
}
