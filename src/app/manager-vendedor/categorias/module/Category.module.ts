import { CategoriasComponent } from '../categorias.component';
import { CheckCategoryDirective } from '../directive/check-category.directive';
import { BaseFormCategorias } from '../models/categorias.models';
import { FilterCategorias } from '../pipes/FilterCategorias.pipe';

export const DeclarationsCategory = [
  CategoriasComponent, //CATEGORIAS
  FilterCategorias, //PIPES CATEGORIAS
  CheckCategoryDirective,
];
export const ProviderCategory = [BaseFormCategorias];
export const ExportCategory = [CategoriasComponent];
