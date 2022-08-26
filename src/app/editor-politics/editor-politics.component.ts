import { Component, OnInit } from '@angular/core';
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
    public formB: BaseFormPolitics
  ) {}

  ngOnInit(): void {
    //this.getAllPolitics();
  }
  getAllPolitics() {
    this.apiServi.getAllPolitics().subscribe((res: Array<IPolitics>) => {
      this.arrayPolitics = res;
    });
  }

  postDataForm() {
    console.log(this.formB.formPolitics.value);
  }
}
