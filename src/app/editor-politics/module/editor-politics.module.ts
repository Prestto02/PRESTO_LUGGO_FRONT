import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPoliticsComponent } from '../list-politics/list-politics.component';
import { EditorPoliticsComponent } from '../editor-politics.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorPoliticsRoutingModule } from './editor-politics-routing.module';
import { SearchPoliticsPipe } from '../pipe/search-politics.pipe';
import { MenuIndexModule } from 'src/app/shared/components/index/menu-index/module/menu-index.module';
import { FooterIndexModule } from 'src/app/shared/components/index/footer-index/module/footer-index.module';
import { BaseFormPolitics } from '../models/BaseFormPolitics.models';
import { NgxPaginationModule } from 'ngx-pagination';
import { VisuallyPoliticsComponent } from '../visually-politics/visually-politics.component';
import { ErrorsExtensionsModule } from 'src/app/shared/components/errors/errors-module.module';
import { PdfViewerModule } from 'ng2-pdf-viewer';
import { LevelsFolderComponent } from '../levels-folder/levels-folder.component';
import { TreeSelectModule } from 'primeng/treeselect';
import { BaseFormFolders } from '../models/BaseFormFolder.models';
@NgModule({
  declarations: [
    EditorPoliticsComponent,
    ListPoliticsComponent,
    SearchPoliticsPipe,
    VisuallyPoliticsComponent,
    LevelsFolderComponent,
  ],
  imports: [
    CommonModule,
    EditorPoliticsRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    NgxPaginationModule,
    PdfViewerModule, //LECTOR DE PDF MODULE
    MenuIndexModule,
    TreeSelectModule, //TREE SELECT MODULE
    FooterIndexModule,
    ErrorsExtensionsModule,
  ],
  providers: [BaseFormPolitics, BaseFormFolders],
})
export class EditorPoliticsModule {}
