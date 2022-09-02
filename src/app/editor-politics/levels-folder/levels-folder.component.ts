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
  dialogVisibleDelete: boolean = false;
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
        id_FolderDocument: this.selectedNode.data,
        nameFolder: '',
      });
    }
  }

  saveOrEdit(): void {
    if (this.editForm) {
      this.folderServi
        .putEditFolder(this.formB.formFolder.value)
        .subscribe((res: any) => {
          this.limpiarFormulario();
          this.getDataFolders();
        });
      return;
    }
    if (this.formB.formFolder.get('id_FolderDocument')?.value) {
      //GUARDAR
      this.folderServi
        .postFolder(this.formB.formFolder.value)
        .subscribe((res: any) => {
          this.limpiarFormulario();
          this.getDataFolders();
        });
      return;
    } else {
      //GUARDAR
      this.folderServi
        .postFolder(this.formB.formFolder.value)
        .subscribe((res: any) => {
          this.limpiarFormulario();
          this.getDataFolders();
        });
      return;
    }
  }
  //EDIT FOLDER
  editFolder(): void {
    this.editForm = true;
    this.formB.formFolder.patchValue({
      id_FolderDocument: this.selectedNode.data,
      nameFolder: this.selectedNode.label,
    });
    //this.limpiarFormulario();
  }

  deleteFolder(): void {
    this.dialogVisibleDelete = true;
  }
  eliminarPoliticsDialog(): void {
    this.folderServi
      .deleteFolder(this.selectedNode.data)
      .subscribe((res: any) => {
        this.limpiarFormulario();
        this.getDataFolders();
        this.dialogVisibleDelete = false;
      });
  }
  cerrarModalDelete(): void {
    this.dialogVisibleDelete = false;
  }
  limpiarFormulario(): void {
    this.editForm = false;
    this.buttonEditDelete = false;
    this.selectedNode = '';
    this.formB.limpiarFormulario();
  }
}
