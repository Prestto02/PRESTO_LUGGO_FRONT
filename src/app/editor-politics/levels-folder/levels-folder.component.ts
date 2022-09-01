import { Component, OnInit } from '@angular/core';
import { BaseFormFolders } from '../models/BaseFormFolder.models';
import { PoliticsEditService } from '../service/politics-edit.service';

@Component({
  selector: 'app-levels-folder',
  templateUrl: './levels-folder.component.html',
  styleUrls: ['./levels-folder.component.css'],
})
export class LevelsFolderComponent implements OnInit {
  nodes: any = [
    /*    {
      label: 'Documents',
      data: 'Documents Folder',
      expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
      children: [
        {
          label: 'Work',
          data: 'Work Folder',
          expandedIcon: 'pi pi-folder-open',
          collapsedIcon: 'pi pi-folder',
          children: [
            {
              label: 'Expenses.doc',
              icon: 'pi pi-file',
              data: 'Expenses Document',
            },
            {
              label: 'Resume.doc',
              icon: 'pi pi-file',
              data: 'Resume Document',
            },
          ],
        },
        {
          label: 'Home',
          data: 'Home Folder',
          expandedIcon: 'pi pi-folder-open',
          collapsedIcon: 'pi pi-folder',
          children: [
            {
              label: 'Invoices.txt',
              icon: 'pi pi-file',
              data: 'Invoices for this month',
            },
          ],
        },
      ],
    },
    {
      label: 'Pictures',
      data: 'Pictures Folder',
      expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
      children: [
        {
          label: 'barcelona.jpg',
          icon: 'pi pi-image',
          data: 'Barcelona Photo',
        },
        { label: 'logo.jpg', icon: 'pi pi-file', data: 'PrimeFaces Logo' },
        { label: 'primeui.png', icon: 'pi pi-image', data: 'PrimeUI Logo' },
      ],
    },
    {
      label: 'Movies',
      data: 'Movies Folder',
      expandedIcon: 'pi pi-folder-open',
      collapsedIcon: 'pi pi-folder',
      children: [
        {
          label: 'Al Pacino',
          data: 'Pacino Movies',
          children: [
            {
              label: 'Scarface',
              icon: 'pi pi-video',
              data: 'Scarface Movie',
            },
            {
              label: 'Serpico',
              icon: 'pi pi-file-video',
              data: 'Serpico Movie',
            },
          ],
        },
        {
          label: 'Robert De Niro',
          data: 'De Niro Movies',
          children: [
            {
              label: 'Goodfellas',
              icon: 'pi pi-video',
              data: 'Goodfellas Movie',
            },
            {
              label: 'Untouchables',
              icon: 'pi pi-video',
              data: 'Untouchables Movie',
            },
          ],
        },
      ],
    }, */
  ];
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
