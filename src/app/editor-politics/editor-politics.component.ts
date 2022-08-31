import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { PositionUser } from '../shared/class/PositionUser';
import { UrlFront } from '../shared/routes/RoutesFront';
import { BaseFormPolitics } from './models/BaseFormPolitics.models';
import { IPolitics } from './models/IPolitics.models';
import { PoliticsEditService } from './service/politics-edit.service';

@Component({
  selector: 'app-editor-politics',
  templateUrl: './editor-politics.component.html',
  styleUrls: ['./editor-politics.component.css'],
})
export class EditorPoliticsComponent implements OnInit {
  arrayPolitics: Array<IPolitics> = [];
  constructor(
    private apiServi: PoliticsEditService,
    private route: Router,
    public formB: BaseFormPolitics,
    private position: PositionUser
  ) {
  }

  ngOnInit(): void {
   // this.position.getPositionUser();
    //this.getAllPolitics();
  }

  setPositionUser(): void {
    this.formB.formPolitics.patchValue({
      latitud: this.position.latitud,
      longitud: this.position.longitud,
    });
  }

  getAllPolitics(): void {
    this.apiServi.getAllPolitics().subscribe((res: Array<IPolitics>) => {
      this.arrayPolitics = res;
    });
  }

  postDataForm(): void {
   // this.setPositionUser();
    console.log(this.formB.formPolitics.value);
    this.formB.limpiarFormulario();
  }

  rutaVisualizar(): void {
    this.route.navigateByUrl(
      `${UrlFront.PoliticasEdicion.ModulePolitics}/${UrlFront.PoliticasEdicion.visualizarPoliticsGet}/1`
    );
  }
}
