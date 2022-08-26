import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ListPoliticsComponent } from '../list-politics/list-politics.component';
import { EditorPoliticsComponent } from '../editor-politics.component';
import { ReactiveFormsModule } from '@angular/forms';
import { EditorPoliticsRoutingModule } from './editor-politics-routing.module';
import { SearchPoliticsPipe } from '../pipe/search-politics.pipe';
import { MenuIndexModule } from 'src/app/shared/components/index/menu-index/module/menu-index.module';
import { FooterIndexModule } from 'src/app/shared/components/index/footer-index/module/footer-index.module';
import { BaseFormPolitics } from '../models/BaseFormPolitics.models';
import { NgxPaginationModule } from 'ngx-pagination';
import { VisuallyPoliticsComponent } from '../visually-politics/visually-politics.component';
import { ErrorsExtensionsModule } from 'src/app/shared/components/errors/errors-module.module';

@NgModule({
  declarations: [
    EditorPoliticsComponent,
    ListPoliticsComponent,
    SearchPoliticsPipe,
    VisuallyPoliticsComponent,
  ],
  imports: [
    CommonModule,
    EditorPoliticsRoutingModule,
    ReactiveFormsModule,
    NgxPaginationModule,
    MenuIndexModule,
    FooterIndexModule,
    ErrorsExtensionsModule,
  ],
  providers: [BaseFormPolitics],
})
export class EditorPoliticsModule {}
