import { Component, OnInit } from '@angular/core';
import { BaseFormFolders } from '../models/BaseFormFolder.models';
import { PoliticsEditService } from '../service/politics-edit.service';

@Component({
  selector: 'app-levels-folder',
  templateUrl: './levels-folder.component.html',
  styleUrls: ['./levels-folder.component.css'],
})
export class LevelsFolderComponent implements OnInit {
  nodes: any = [];
  editForm: boolean = false;
  buttonEditDelete: boolean = false;
  selectedNode: any;
  constructor(
    public formB: BaseFormFolders,
    private folderServi: PoliticsEditService
  ) {}

  ngOnInit() {
    this.getDataFolders();
  }

  getDataFolders(): void {
    this.folderServi.getFoldersPolitics().subscribe((res: any) => {
      this.nodes = res;
    });
  }
  mostrarDatos(): void {
    if (this.selectedNode) {
      this.buttonEditDelete = true;
      this.editForm = false;
      this.formB.formFolder.patchValue({
        nameFolder: '',
      });
    }
  }

  saveOrEdit(): void {
    if (this.formB.formFolder.get('id_FolderDocument')?.value) {
      //ACTUALIZAR
      console.log('actualizar');
      this.limpiarFormulario();
    } else {
      //GUARDAR
      console.log('guardar');
      this.limpiarFormulario();
    }
  }
  editFolder(): void {
    this.editForm = true;
    this.formB.formFolder.patchValue({
      id_FolderDocument: this.selectedNode.data,
      nameFolder: this.selectedNode.label,
    });
    console.log(this.formB.formFolder.value);
    //this.limpiarFormulario();
  }

  deleteFolder(): void {}

  limpiarFormulario(): void {
    this.editForm = false;
    this.buttonEditDelete = false;
    this.formB.limpiarFormulario();
  }
}
