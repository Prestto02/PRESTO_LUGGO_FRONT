import { Component, OnInit } from '@angular/core';
import { PositionUser } from '../shared/class/PositionUser';
import { ValidarYTransformarImagen } from '../shared/validations/ValidarYTransformarImagen';
import { BaseFormPolitics } from './models/BaseFormPolitics.models';
import { IPoliticsData } from './models/IPolitics.models';
import { PoliticsEditService } from './service/politics-edit.service';

@Component({
  selector: 'app-editor-politics',
  templateUrl: './editor-politics.component.html',
  styleUrls: ['./editor-politics.component.css'],
})
export class EditorPoliticsComponent implements OnInit {
  arrayPolitics: Array<IPoliticsData> = [];
  selectedCountry: any;
  codeEditName: any;
  nameEditCode: any;
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
    this.getEditNameFolders();
  }
  //OBTENGO TODAS LAS CARPETAS
  getAllFolders(): void {
    this.apiServi.getFoldersAll().subscribe((res: any) => {
      this.folders = res;
    });
  }
  //SETEAR EL NOMBRE CON BEHAVIOR SUBJECT PARA OBTENER LA RUTA DE LA CARPETA Y INSERTARLA EN LAS OPCIONES
  getEditNameFolders(): void {
    this.apiServi.editName$.subscribe((res: any) => {
      this.codeEditName = res;
      const data = this.folders.filter((res: any) => {
        return res.code === this.codeEditName;
      });
      this.selectedCountry = data[0];
    });
  }
  //OBTENGO LA POSICION DEL USUARIO
  setPositionUser(): void {
    this.formB.formPolitics.patchValue({
      latitud: this.position.latitud,
      longitud: this.position.longitud,
    });
  }
  //CARGO EL NUEVO DOCUMENTO
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
  //OBTENGO EL ARCHIVO DE LA IMAGEN PARA TRANSFORMARLA EN BASE 64
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
  //OBTENGO TODAS LAS POLITICAS DEL ADMIN
  getAllPolitics(): void {
    this.apiServi.getAllPolitics().subscribe((res: Array<IPoliticsData>) => {
      this.arrayPolitics = res;
    });
  }
  //EDITO O REGISTRO LOS DATOS DE LA NUEVA POLITICA
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
